import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import homeRoute from './src/routes/home';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ express: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoute);
  }
}

export default new App().app;
