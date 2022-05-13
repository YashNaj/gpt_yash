import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatsGPT3">What Is GPT3?</a>
    </p>
    <p>
      <a href="#possibilities">Open AI</a>
    </p>
    <p>
      <a href="#features">Features</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  //block element modifier = '__'
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign In</p>
          <button>Sign Up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center ">
              <div className="gpt3__navbar-menu_container-links scale-up-center">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign In</p>
                  <button type = "button">Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
