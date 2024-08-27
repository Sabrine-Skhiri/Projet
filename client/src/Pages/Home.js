import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';

function Home() {
  const { houses } = useContext(HouseContext);

  return (
    <div style={{ padding: '20px' }}>
    
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
    <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.5' }}>
          Trouvez les meilleures offres de logement adaptées à vos besoins et à votre budget.
        </p>
        
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src="/images/stars.png" alt="Star Rating" style={{ width: '150px', marginBottom: '10px' }} />
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Tellement utile et pratique !
          </p>
        </div>
      </div>

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
