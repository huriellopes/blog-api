import { User } from './../models/User';
import { getCustomRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import { decode } from 'jsonwebtoken';
import AppError from '../errors/AppError';
import UserRepository from '../repositories/UserRepository';

async function decoder(req: Request): Promise<User | undefined> {
  const authHeader = req.headers.authorization;
  const userRepository = getCustomRepository(UserRepository);

  if (!authHeader) throw new AppError('User is not permission', 401);

  const [, token] = authHeader?.split(' ');

  const payload = decode(token);

  const user = await userRepository.findOne(payload?.sub, {
    relations: ['roles'],
  });

  return user;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function is(role: string[]) {
  const roleAuthorized = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const user = await decoder(req);

    const userRoles = user?.roles.map((role) => role.name);

    const existsRoles = userRoles?.some((r) => role.includes(r));

    if (existsRoles) {
      return next();
    }

    return res.status(401).json({ message: 'User not authorized' });
  };

  return roleAuthorized;
}
