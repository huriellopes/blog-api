import { Router } from 'express';
import RolesController from '../api/controllers/RoleController';
import ensureAuthenticated from '../api/middlewares/ensureAuthenticated';

const rolesRouter = Router();
const rolesController = new RolesController();

rolesRouter.use(ensureAuthenticated);
rolesRouter.post('/', rolesController.create);

export default rolesRouter;
