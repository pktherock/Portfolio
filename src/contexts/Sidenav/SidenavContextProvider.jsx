import PropTypes from "prop-types";
import { SidenavProvider } from "./SidenavContext";
import { useState } from "react";

function SidenavContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleSideNav() {
    setIsOpen(!isOpen);
  }

  return (
    <SidenavProvider value={{ isOpen, toggleSideNav }}>
      {children}
    </SidenavProvider>
  );
}

SidenavContextProvider.propTypes = {
  children: PropTypes.any,
};

export default SidenavContextProvider;
