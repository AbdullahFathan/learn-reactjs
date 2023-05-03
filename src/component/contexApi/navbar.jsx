import { useState, createContext, useContext } from "react";
import Navlink from "./navlink";

export const NavbarContex = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "abdullah" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContex.Provider value={{ user, logout }}>
      <nav className="navbar">
        <b>CONTEX API</b>
        <Navlink />
      </nav>
    </NavbarContex.Provider>
  );
};

export default Navbar;
