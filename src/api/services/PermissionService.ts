import { Permission } from './../models/Permission';
import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';
import PermissionsRepository from '../repositories/PermissionsRepository';

interface IRequest {
  name: string;
  description: string;
}

class PermissionService {
  async create({ name, description }: IRequest): Promise<Permission> {
    const permissionRepository = getCustomRepository(PermissionsRepository);

    const existPermission = await permissionRepository.findOne({ name });

    if (existPermission) {
      throw new AppError('Permission already exists!', 400);
    }

    const permission = permissionRepository.create({ name, description });

    await permissionRepository.save(permission);

    return permission;
  }
}

export default PermissionService;
