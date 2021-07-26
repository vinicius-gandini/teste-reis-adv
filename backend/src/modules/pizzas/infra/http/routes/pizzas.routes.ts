import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../../../config/upload';

import PizzasController from '../controller/PizzasController';

const pizzasRouter = Router();
const upload = multer(uploadConfig);
const pizzasController = new PizzasController();

pizzasRouter.post('/', upload.single('image'), pizzasController.create);
pizzasRouter.get('/', pizzasController.index);
pizzasRouter.delete('/:id', pizzasController.delete);

export default pizzasRouter;
