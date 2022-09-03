import { Router } from 'express';
import userController from '../controllers/User';

const routes = new Router();

routes.post('/', userController.store); // cria usuario

export default routes;
