import { inject, injectable } from 'tsyringe';

import Pizza from '../infra/typeorm/entities/Pizza';
import IPizzasRepository from '../repositories/IPizzasRepository';

interface IRequest {
  id: string;
}

@injectable()
class RemovePizzaService {
  constructor(
    @inject('PizzasRepository')
    private pizzasRepository: IPizzasRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Pizza | undefined> {
    const pizza = await this.pizzasRepository.remove(id);

    return pizza;
  }
}

export default RemovePizzaService;
