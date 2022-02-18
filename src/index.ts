import 'reflect-metadata';
import { HttpServer } from './http-server';
import { AppContainer } from './container';

setImmediate(() => {
  const container = new AppContainer().container;
  const httpServer = new HttpServer(container);
  httpServer.start();
});
