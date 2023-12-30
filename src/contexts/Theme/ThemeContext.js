/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

const useTheme = () => useContext(ThemeContext);

export default useTheme;
