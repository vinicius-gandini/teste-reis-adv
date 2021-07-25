import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreatePizzaService from '@modules/pizzas/services/CreatePizzaService';
import ListPizzaService from '@modules/pizzas/services/ListPizzaService';
import RemovePizzaService from '@modules/pizzas/services/RemovePizzaService';
import Pizza from '@modules/pizzas/infra/typeorm/entities/Pizza';

export default class PizzasController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, price, user_id } = request.body;

    const createPizza = container.resolve(CreatePizzaService);

    const requestImages = request.file?.filename;

    const pizza = await createPizza.execute({
      name,
      description,
      price,
      user_id,
      image: requestImages,
    });

    return response.json(pizza);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listPizzas = container.resolve(ListPizzaService);

    const pizzas = await listPizzas.execute();

    return response.json(pizzas);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deletePizza = container.resolve(RemovePizzaService);

    const pizza = await deletePizza.execute({ id });

    return response.status(200).json(pizza);
  }
}
