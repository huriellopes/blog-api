import { Router } from 'express';
import CategoryController from '../api/controllers/CategoryController';
import ensureAuthenticated from '../api/middlewares/ensureAuthenticated';
import { is } from '../api/middlewares/permission';

const categoriesRouter = Router();
const categoryController = new CategoryController();

categoriesRouter.use(ensureAuthenticated);
categoriesRouter.post('/', is(['Role_Admin']), categoryController.create);

export default categoriesRouter;
