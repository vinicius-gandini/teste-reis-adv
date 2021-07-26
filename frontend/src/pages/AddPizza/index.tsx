import React, { ChangeEvent, FormEvent, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

const AddPizza: React.FC = () => {
    const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [user_id, setUserId] = useState('');
  const [image, setImage] = useState<File[]>([]);

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImage(selectedImages);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(image);
      const data = new FormData();

      data.append('name', name);
      data.append('description', description);
      data.append('price', String(price));

      image.forEach(image => {
        data.append('image', image);
      })

      const response = await api.post('pizzas', data);

      console.log(response);
    } catch (err) {
      console.log(err.response);
    }

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="file" onChange={handleSelectImages} />
      <input type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="descricao" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="preco" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      <button type="submit">cadastrar</button>
    </form>
  );
}

export default AddPizza;