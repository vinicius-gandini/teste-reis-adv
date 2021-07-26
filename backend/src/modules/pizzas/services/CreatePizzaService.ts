import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Pizza from '../infra/typeorm/entities/Pizza';
import IPizzasRepository from '../repositories/IPizzasRepository';

interface IRequest {
  name: string;
  description: string;
  price: number;
  user_id: string;
  image: string | undefined;
}

@injectable()
class CreatePizzaService {
  constructor(
    @inject('PizzasRepository')
    private pizzasRepository: IPizzasRepository,
  ) {}

  public async execute({
    name,
    description,
    price,
    user_id,
    image,
  }: IRequest): Promise<Pizza> {
    const pizzaExists = await this.pizzasRepository.findByName(name);
    console.log(image);

    if (pizzaExists) {
      throw new AppError('There is already a pizza with this name');
    }

    const pizza = await this.pizzasRepository.create({
      name,
      description,
      price,
      user_id,
      image,
    });

    return pizza;
  }
}

export default CreatePizzaService;
