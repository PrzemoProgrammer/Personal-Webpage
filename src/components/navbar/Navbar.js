import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

import "./Navbar.css";

function AddNavLink({ link, text }) {
  return (
    <NavLink exact="true" activeclassname="active" to={link}>
      {text}
    </NavLink>
  );
}

function Navbar() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerClicked(!hamburgerClicked);
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="navbarContainer">
      <nav>
        <div className="logo">
          <Logo alt="Logo" />
        </div>

        <div className={`nav-items${menuOpen ? "-open" : ""}`}>
          <AddNavLink link="/" text="HOME" />

          <AddNavLink link="/Games" text="GAMES" />

          <AddNavLink link="/Apps" text="APPS" />

          <AddNavLink link="/About" text="ABOUT" />
        </div>

        <div className="hamburger" onClick={() => handleHamburgerClick()}>
          <i className={`fas ${hamburgerClicked ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
