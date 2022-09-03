import { Router } from 'express';
import homeController from '../controllers/Home';

const routes = new Router();

routes.get('/', homeController.index); // lista todos usuarios

export default routes;
