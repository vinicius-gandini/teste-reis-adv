import Pizza from '../infra/typeorm/entities/Pizza';

export default {
  render(pizza: Pizza) {
    return {
      id: pizza.id,
      name: pizza.name,
      description: pizza.description,
      price: pizza.price,
      user_id: pizza.user_id,
      created_at: pizza.created_at,
      updated_at: pizza.updated_at,
      image: `http://localhost:3333/uploads/${pizza.image}`,
    };
  },

  renderMany(pizzas: Pizza[]) {
    return pizzas.map(pizza => this.render(pizza));
  },
};
