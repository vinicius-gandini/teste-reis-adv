import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Input from '../../components/Input';
import InputArea from '../../components/InputArea';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

import { Overlay, Container, ImagePreview, CloseButton, AddPizzaButton } from './styles';

const AddPizza: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [user_id, setUserId] = useState('');
  const [image, setImage] = useState<File[]>([]);
  const { userId, setShowAddPizza } = useAuth();
  const [previewImage, setPreviewImage] = useState<string[]>([])

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImage(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImage(selectedImagesPreview);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(image);
      const data = new FormData();

      data.append('name', name);
      data.append('description', description);
      data.append('price', String(price));
      data.append('user_id', userId);

      image.forEach(image => {
        data.append('image', image);
      })

      await api.post('pizzas', data);
      setShowAddPizza(false);
    } catch (err) {
      console.log(err.response);
    }

  }

  return (
    <Overlay>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <ImagePreview>
          {previewImage.map(image => {
                  return (
                    <img key={image} src={image} alt={name} />
                  )
                })}
          </ImagePreview>
          <input style={{ marginBottom: '1rem' }} type="file" onChange={handleSelectImages} />
          <Input style={{ width: '300px' }} label="Nome" type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} />
          <InputArea rows={4} cols={40} label="Descrição" placeholder="descricao" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input label="Preço" type="number" placeholder="preco" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
          <AddPizzaButton type="submit">Cadastrar</AddPizzaButton>
        </form>
        <CloseButton onClick={() => setShowAddPizza(false)}>
          <FaTimes size={24} color="#000" />
        </CloseButton>
      </Container>
    </Overlay>
  );
}

export default AddPizza;