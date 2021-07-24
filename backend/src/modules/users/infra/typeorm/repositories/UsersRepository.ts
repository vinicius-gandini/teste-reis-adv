import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    name,
    username,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ name, username, password });

    await this.ormRepository.save(user);

    return user;
  }

  public async findByUser(username: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { username } });

    return user;
  }
}

export default UsersRepository;
