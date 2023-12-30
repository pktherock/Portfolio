import { createContext, useContext } from "react";

export const SidenavContext = createContext({
  isOpen: true,
  toggleSideNav: () => {},
});

export const SidenavProvider = SidenavContext.Provider;

const useSideNav = () => useContext(SidenavContext);

export default useSideNav;
