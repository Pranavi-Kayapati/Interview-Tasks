import React, { useState } from "react";
import "./NavigationMenu.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="Hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <GrClose size={"30px"} />
        ) : (
          <GiHamburgerMenu size={"30px"} />
        )}
      </div>
      <div
        className={`Navbar-container ${menuOpen ? "open" : "close"}`}
        onClick={handleCloseMenu}
      >
        <Link to="/dashboard">
          <h3>Authentication</h3>
        </Link>
        <Link to="/debounce">
          <h3>Debouncing and Throttling</h3>
        </Link>
        <Link to="/todos">
          <h3>Todo List</h3>
        </Link>
        <Link to="/dynamicform">
          <h3>Dynamic Form </h3>
        </Link>
      </div>
    </>
  );
};

export default NavigationMenu;
