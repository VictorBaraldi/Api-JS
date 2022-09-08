import { Router } from 'express';

import fotoController from '../controllers/Foto';

const routes = new Router();

routes.post('/', fotoController.store); // lista todos usuarios

export default routes;
