import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/Foto';

const routes = new Router();

routes.post('/', loginRequired, fotoController.store); // lista todos usuarios

export default routes;
