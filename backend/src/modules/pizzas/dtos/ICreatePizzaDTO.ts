export default interface ICreatePizzaDTO {
  name: string;
  description: string;
  price: number;
  user_id: string;
  image: string | undefined;
}
