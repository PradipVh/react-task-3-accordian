// BagContext.js
import React, { createContext, useContext, useState } from 'react';

const BagContext = createContext();

export function useBag() {
  return useContext(BagContext);
}

export function BagProvider({ children }) {
  const [bagItems, setBagItems] = useState([]);

  const addToBag = (item, quantity) => {
    setBagItems([...bagItems, { item, quantity }]);
  };

  return (
    <BagContext.Provider value={{ bagItems, addToBag }}>
      {children}
    </BagContext.Provider>
  );
}
