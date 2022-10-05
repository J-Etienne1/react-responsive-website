import React, {useState} from "react";
import { FaBars, FaTimes,FaGhost } from "react-icons/fa";
import logo from "./images/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

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
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/">Demo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
