import { Router, Response } from 'express';
import usersRouter from './users.routes';
import sessionRouter from './sessions.routes';
import permissionRouter from './permission.routes';
import rolesRouter from './roles.routes';
import categoriesRouter from './categories.routes';
import postsRouter from './posts.routes';

const router = Router();

router.get('/test', (_, res: Response) => {
  res.json({ message: 'Server is working! Go Coding!' });
});

router.use('/users', usersRouter);
router.use('/session', sessionRouter);
router.use('/permission', permissionRouter);
router.use('/roles', rolesRouter);

router.use('/category', categoriesRouter);
router.use('/post', postsRouter);

export default router;
