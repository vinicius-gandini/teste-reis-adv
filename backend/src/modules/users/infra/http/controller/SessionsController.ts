import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthUserService from '@modules/users/services/AuthUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateUser = container.resolve(AuthUserService);

    const { user } = await authenticateUser.execute({
      username,
      password,
    });

    return response.json({ user });
  }
}
