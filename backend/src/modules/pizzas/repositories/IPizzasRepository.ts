import Pizza from '../infra/typeorm/entities/Pizza';

import ICreatePizzaDTO from '../dtos/ICreatePizzaDTO';

export default interface IPizzasRepository {
  create(data: ICreatePizzaDTO): Promise<Pizza>;
  findAll(): Promise<Pizza[]>;
  findByName(name: string): Promise<Pizza | undefined>;
}
