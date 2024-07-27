import { createContext, useState } from 'react';

export const ModoOscuroContext = createContext();

export const ModoOscuroProvider = ({ children }) => {
  const [tema, setTema] = useState("light");

  return (
    <ModoOscuroContext.Provider value={{ tema, setTema }}>
      {children}
    </ModoOscuroContext.Provider>
  );
};