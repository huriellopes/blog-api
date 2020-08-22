import { Router } from 'express';
import PostController from '../api/controllers/PostController';
import ensureAuthenticated from '../api/middlewares/ensureAuthenticated';
import { is } from '../api/middlewares/permission';

const postsRouter = Router();
const postController = new PostController();

postsRouter.use(ensureAuthenticated);
postsRouter.post('/', is(['Role_Admin']), postController.create);

export default postsRouter;
