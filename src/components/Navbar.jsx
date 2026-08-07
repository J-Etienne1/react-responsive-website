import React, {useState} from "react";
import { FaBars, FaTimes,FaGhost } from "react-icons/fa";
import logo from "./images/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)
const closeMenu = () => setClick(false)

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: "#ffffff" }}/>) : (<FaGhost size={30} style={{ color: "#ffffff" }} />)}
          {/*FaGhost used instead of FaBars just for fun*/}
        </div>
        <ul className={click ? "nav-menu active"  : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#testimonals" onClick={closeMenu}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#demo" onClick={closeMenu}>Demo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
