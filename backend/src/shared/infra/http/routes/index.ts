import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import pizzasRouter from '@modules/pizzas/infra/http/routes/pizzas.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/pizzas', pizzasRouter);

export default routes;
