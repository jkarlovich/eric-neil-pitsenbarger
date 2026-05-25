import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";

function Menu({ path }) {
  let location = useLocation();
  const getClass = (linkPath) => {
    return location.pathname === linkPath ? "link focused" : "link";
  };

  return (
    <nav className="menu">
      <Link to="/" className={getClass("/")}>
        Home
      </Link>
      <Link to="/about" className={getClass("/about")}>
        About
      </Link>
      <Link to="/bio" className={getClass("/bio")}>
        Bio
      </Link>
      <Link to="/pictures" className={getClass("/pictures")}>
        Pictures
      </Link>
      <Link to="/drawings" className={getClass("/drawings")}>
        Drawings
      </Link>
      <Link to="/contact" className={getClass("/contact")}>
        Contact
      </Link>
    </nav>
  );
}

export default Menu;
