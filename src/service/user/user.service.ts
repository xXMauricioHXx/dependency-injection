import { injectable } from 'tsyringe';
import { UserService } from './user.service.interface';

@injectable()
export class UserServiceImplementation implements UserService {
  list(): Record<string, any>[] {
    return [{ id: 1, name: 'Olá mundo' }];
  }
}
