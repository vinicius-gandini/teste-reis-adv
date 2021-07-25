import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreatePizzaService from '@modules/pizzas/services/CreatePizzaService';
import ListPizzaService from '@modules/pizzas/services/ListPizzaService';
import Pizza from '@modules/pizzas/infra/typeorm/entities/Pizza';

export default class PizzasController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, price, user_id } = request.body;

    const createPizza = container.resolve(CreatePizzaService);

    const pizza = await createPizza.execute({
      name,
      description,
      price,
      user_id,
    });

    return response.json(pizza);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listPizzas = container.resolve(ListPizzaService);

    const pizzas = await listPizzas.execute();

    return response.json(pizzas);
  }
}
