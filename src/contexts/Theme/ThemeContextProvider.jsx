import PropTypes from "prop-types";
import { ThemeProvider } from "./ThemeContext";
import { useEffect, useState } from "react";

function ThemeContextProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  function toggleTheme() {
    setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");

    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>{children}</ThemeProvider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.any,
};

export default ThemeContextProvider;
