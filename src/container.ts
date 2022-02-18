import { container, DependencyContainer } from 'tsyringe';
import { UserServiceImplementation } from './service';

export class AppContainer {
  container: DependencyContainer;

  constructor() {
    this.loadProviders().forEach((provider: Function) => {
      const { name } = provider;
      container.register(name, provider as any);
    });

    this.container = container;
  }

  loadProviders(): Function[] {
    return [UserServiceImplementation];
  }
}
