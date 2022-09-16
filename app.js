import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoute from './src/routes/home';
import userRoute from './src/routes/user';
import tokenRoute from './src/routes/token';
import alunoRoute from './src/routes/aluno';
import fotoRoute from './src/routes/foto';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ express: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'upload')));
  }

  routes() {
    this.app.use('/api/', homeRoute);
    this.app.use('/api/users/', userRoute);
    this.app.use('/api/tokens/', tokenRoute);
    this.app.use('/api/alunos/', alunoRoute);
    this.app.use('/api/fotos/', fotoRoute);
  }
}

export default new App().app;
