import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return <div>{children}</div>;
};
