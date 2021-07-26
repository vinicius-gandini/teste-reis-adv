import ICreatePizzaDTO from '@modules/pizzas/dtos/ICreatePizzaDTO';
import IPizzasRepository from '@modules/pizzas/repositories/IPizzasRepository';
import { getRepository, Repository } from 'typeorm';
import Pizza from '../entities/Pizza';

class PizzasRepository implements IPizzasRepository {
  private ormRepository: Repository<Pizza>;

  constructor() {
    this.ormRepository = getRepository(Pizza);
  }

  public async create({
    name,
    description,
    price,
    user_id,
    image,
  }: ICreatePizzaDTO): Promise<Pizza> {
    const pizza = this.ormRepository.create({
      name,
      description,
      price,
      user_id,
      image,
    });

    await this.ormRepository.save(pizza);

    return pizza;
  }

  public async findAll(): Promise<Pizza[]> {
    const pizza = await this.ormRepository.find();

    return pizza;
  }

  public async findByName(name: string): Promise<Pizza | undefined> {
    const pizza = await this.ormRepository.findOne({ where: { name } });

    return pizza;
  }

  public async remove(id: string): Promise<Pizza | undefined> {
    const pizza = await this.ormRepository.findOne({ where: { id } });

    if (pizza) {
      const teste = await this.ormRepository.remove(pizza);
      console.log(teste);
      return pizza;
    }

    return pizza;
  }
}

export default PizzasRepository;
