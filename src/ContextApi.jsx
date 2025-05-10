import React, { createContext, useContext } from "react";
import { data } from "./data";

const AppContext = createContext({ data: null });

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
