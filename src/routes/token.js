import { Router } from 'express';
import tokenController from '../controllers/token';

const routes = new Router();

routes.post('/', tokenController.store); // lista todos usuarios

export default routes;
