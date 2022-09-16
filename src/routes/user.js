import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// Não deveria existir
routes.get('/', userController.index); // mostra todos os usuário
routes.get('/:id', userController.show); // mostra o usuário com id

routes.post('/', loginRequired, userController.store); // cria usuário
routes.put('/', loginRequired, userController.update); // update do usuário
routes.delete('/', loginRequired, userController.delete); // apagando

export default routes;
