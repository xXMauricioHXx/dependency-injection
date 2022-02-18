import { inject, injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';
import { Controller } from '../controller';
import { get } from '../../decorators/http';
import { UserService } from '../../service';

@injectable()
export class UserController extends Controller {
  constructor(
    @inject('UserServiceImplementation') private userService: UserService
  ) {
    super();
  }

  @get('/users')
  list(req: Request, res: Response, next: NextFunction) {
    try {
      const users = this.userService.list();

      return res.send(users);
    } catch (error) {
      next(error);
    }
  }
}
