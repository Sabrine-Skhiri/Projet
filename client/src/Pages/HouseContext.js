import React, { createContext, useState } from 'react';

export const HouseContext = createContext();

export const HouseProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);

  const addHouse = (house) => {
    setHouses([...houses, house]);
  };

  return (
    <HouseContext.Provider value={{ houses, addHouse }}>
      {children}
    </HouseContext.Provider>
  );
};
