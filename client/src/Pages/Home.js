import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';

function Home() {
  const { houses } = useContext(HouseContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Liste des maisons</h1>
      {houses.length === 0 ? (
        <p>Aucune maison publiée pour le moment.</p>
      ) : (
        <div>
          {houses.map((house, index) => (
            <div key={index} style={{ border: '1px solid black', marginBottom: '10px', padding: '10px' }}>
              <h2>{house.title}</h2>
              <p>{house.description}</p>
              <p>Prix: {house.price}€</p>
              <p>Localisation: {house.location}</p>
              <div>
                {house.images.map((image, idx) => (
                  <img key={idx} src={image} alt={`house-${idx}`} style={{ maxWidth: '100px', marginRight: '10px' }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
