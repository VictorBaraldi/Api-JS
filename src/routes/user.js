import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.post('/', userController.store); // cria usuário
routes.get('/', loginRequired, userController.index); // mostra todos os usuário
routes.get('/:id', userController.show); // mostra o usuário com id
routes.put('/:id', userController.update); // update do usuário
routes.delete('/:id', userController.delete); // apagando

export default routes;
