import { Request, Response } from 'express';
import RoleService from '../services/RoleService';

class RoleController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async create(req: Request, res: Response) {
    const { name, description, permissions } = req.body;

    const roleService = new RoleService();

    const role = await roleService.create({
      name,
      description,
      permissions,
    });

    return res.status(201).json(role);
  }
}

export default RoleController;
