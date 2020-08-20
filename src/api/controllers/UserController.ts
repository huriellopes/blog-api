import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import UserService from '../services/UserService';

class UserController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async create(req: Request, res: Response) {
    const { name, email, password, roles } = req.body;

    const userService = new UserService();

    const user = await userService.create({ name, email, password, roles });

    return res.status(201).json(classToClass(user));
  }
}

export default UserController;
