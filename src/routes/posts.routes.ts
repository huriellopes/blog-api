import { Router } from 'express';
import PostCotnroller from '../api/controllers/PostCotnroller';
import ensureAuthenticated from '../api/middlewares/ensureAuthenticated';
import { is } from '../api/middlewares/permission';

const postsRouter = Router();
const postController = new PostCotnroller();

postsRouter.use(ensureAuthenticated);
postsRouter.post('/', is(['Role_Admin']), postController.create);

export default postsRouter;
