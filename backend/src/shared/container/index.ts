import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IPizzasRepository from '@modules/pizzas/repositories/IPizzasRepository';
import PizzasRepository from '@modules/pizzas/infra/typeorm/repositories/PizzasRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPizzasRepository>(
  'PizzasRepository',
  PizzasRepository,
);
