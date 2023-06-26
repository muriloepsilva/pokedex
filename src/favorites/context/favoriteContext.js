import React, { useState } from "react";

const INITAL_FAVORITES_VALUE = [];

// create context
export const FavoriteContext = React.createContext({
  favorites: INITAL_FAVORITES_VALUE,
  setFavorites: () => console.warn(`setFavorites is not ready`),
});

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(INITAL_FAVORITES_VALUE);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
