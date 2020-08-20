import { Router } from 'express';
import PermissionController from '../api/controllers/PermissionController';
import ensureAuthenticated from '../api/middlewares/ensureAuthenticated';

const permissionRouter = Router();
const permissionController = new PermissionController();

permissionRouter.use(ensureAuthenticated);
permissionRouter.post('/', permissionController.create);

export default permissionRouter;
