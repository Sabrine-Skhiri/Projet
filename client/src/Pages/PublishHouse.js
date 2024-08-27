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
      images: Array.from(images).map((image) => URL.createObjectURL(image)), 
    };

    addHouse(newHouse); 

    navigate('/'); 
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        marginTop: '50px', 
        padding: '20px', 
        border: '1px solid #e64a19', 
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        width: '300px',
        margin: '0 auto'
      }}
    >
      <div style={{ marginBottom: '15px', width: '100%' }}>
        <label>Titre :</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '15px', width: '100%' }}>
        <label>Description :</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '15px', width: '100%' }}>
        <label>Prix :</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '15px', width: '100%' }}>
        <label>Localisation :</label>
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: '15px', width: '100%' }}>
        <label>Images :</label>
        <input 
          type="file" 
          multiple 
          onChange={handleImageChange} 
          style={{ width: '100%' }}
        />
      </div>
      <button 
        type="submit" 
        style={{ 
          backgroundColor: '#e64a19', 
          borderColor: '#e64a19', 
          marginTop: '20px', 
          color: 'white', 
          padding: '10px 20px', 
          borderRadius: '5px' 
        }}
      >
        Publier
      </button>
    </form>
  );
}

export default PublishHouse;
