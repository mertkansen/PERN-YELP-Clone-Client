import React, { useContext, createContext, useReducer } from "react";

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({
  reducer,
  initialState,
  children,
}) => (
  <RestaurantContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </RestaurantContext.Provider>
);

export const useStateValue = () => useContext(RestaurantContext);
