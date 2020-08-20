import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import AuthenticateService from '../services/AuthenticateService';

class SessionController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const authenticateServices = new AuthenticateService();

    const { user, token } = await authenticateServices.generateToken({
      email,
      password,
    });

    return res.json(classToClass({ user, token }));
  }
}

export default SessionController;
