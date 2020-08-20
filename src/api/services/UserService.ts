import { User } from './../models/User';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';
import AppError from '../errors/AppError';
import RolesRepository from '../repositories/RolesRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  roles: [];
}

class UserService {
  async create({ name, email, password, roles }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const rolesRepository = getCustomRepository(RolesRepository);

    const checkEmailExists = await userRepository.findOne({ email });

    if (checkEmailExists) {
      throw new AppError('This email is already being used!', 400);
    }

    const existsRoles = await rolesRepository.findByIds(roles);

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
      roles: existsRoles,
    });

    await userRepository.save(user);

    return user;
  }
}

export default UserService;
