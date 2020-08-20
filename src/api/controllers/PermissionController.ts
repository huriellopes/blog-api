import { Request, Response } from 'express';
import PermissionService from '../services/PermissionService';

class PermissionController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async create(req: Request, res: Response) {
    const { name, description } = req.body;

    const permissionService = new PermissionService();

    const permission = await permissionService.create({
      name,
      description,
    });

    return res.status(201).json(permission);
  }
}

export default PermissionController;
