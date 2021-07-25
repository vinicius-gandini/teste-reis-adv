import { inject, injectable } from 'tsyringe';

import Pizza from '../infra/typeorm/entities/Pizza';
import IPizzasRepository from '../repositories/IPizzasRepository';

@injectable()
class ListPizzaService {
  constructor(
    @inject('PizzasRepository')
    private pizzasRepository: IPizzasRepository,
  ) {}

  public async execute(): Promise<Pizza[]> {
    const pizza = await this.pizzasRepository.findAll();

    return pizza;
  }
}

export default ListPizzaService;
