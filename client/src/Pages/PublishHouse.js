import React, { useState, useContext } from 'react';
import { HouseContext } from './HouseContext';
import { useNavigate } from 'react-router-dom';

function PublishHouse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  
  const { addHouse } = useContext(HouseContext);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newHouse = {
      title,
      description,
      price,
      location,
      images: Array.from(images).map((image) => URL.createObjectURL(image)), // Création d'URLs temporaires pour afficher les images
    };

    addHouse(newHouse); 

    navigate('/'); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Publier une maison</h1>
      <div style={{ marginBottom: '15px' }}>
        <label>Titre :</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Description :</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Prix :</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Localisation :</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>Images :</label>
        <input type="file" multiple onChange={handleImageChange} />
      </div>
      <button type="submit">Publier</button>
    </form>
  );
}

export default PublishHouse;
