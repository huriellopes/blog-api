import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';

import { User } from './../models/User';
import UserRepository from '../repositories/UserRepository';
import AppError from '../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateService {
  async generateToken({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new AppError('Incorrect email and password combination.');
    }

    const passwordIsEquals = await compare(password, user.password);

    if (!passwordIsEquals) {
      throw new AppError('Incorrect email and password combination.');
    }

    const token = sign({}, String(process.env.APP_SECRET), {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default AuthenticateService;
