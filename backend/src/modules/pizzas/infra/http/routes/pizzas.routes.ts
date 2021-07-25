import { Router } from 'express';

import PizzasController from '../controller/PizzasController';

const pizzasRouter = Router();
const pizzasController = new PizzasController();

pizzasRouter.post('/', pizzasController.create);
pizzasRouter.get('/', pizzasController.index);
pizzasRouter.delete('/:id', pizzasController.delete);

export default pizzasRouter;
