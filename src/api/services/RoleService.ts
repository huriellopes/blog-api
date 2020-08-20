import { Role } from './../models/Role';
import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';
import RolesRepository from '../repositories/RolesRepository';
import PermissionsRepository from '../repositories/PermissionsRepository';

interface IRequest {
  name: string;
  description: string;
  permissions: [];
}

class RoleService {
  async create({ name, description, permissions }: IRequest): Promise<Role> {
    const roleRepository = getCustomRepository(RolesRepository);
    const permissionRepository = getCustomRepository(PermissionsRepository);

    const existRole = await roleRepository.findOne({ name });

    if (existRole) {
      throw new AppError('Permission already exists!', 400);
    }

    const existsPermissions = await permissionRepository.findByIds(permissions);

    const role = roleRepository.create({
      name,
      description,
      permission: existsPermissions,
    });

    await roleRepository.save(role);

    return role;
  }
}

export default RoleService;
