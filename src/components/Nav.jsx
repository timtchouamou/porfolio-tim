import React from "react";
import "./Nav.css";


function Nav({
  toggleModal,
  toggleContactModal,
  toggleContrast,
  openMenu,
  closeMenu,
}) {
  return (
    <nav>
      <img
        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
        alt="DL logo"
        className="logo"
      ></img>
      <ul className="nav__link--list">
        <li className="nav__link--item">
          <a href="#gallery">Gallery</a>
        </li>
        <li className="nav__link--item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav__link--item">
          <a href="#" onClick={() => {toggleModal(); toggleContactModal()}}>
            Contact
          </a>
        </li>
        <li className="nav__link--item">
          <a href="#" onClick={toggleContrast}>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </a>
        </li>
      </ul>
      <button className="btn__menu" onClick={openMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <i className="fas fa-times"></i>
        </button>
        <div className="btn__menu--list">
          <a href="#gallery" className="btn__menu--item" onClick={closeMenu}>
            Gallery
          </a>
          <a href="#projects" className="btn__menu--item" onClick={closeMenu}>
            Projects
          </a>
          <a
            href="#"
            className="btn__menu--item"
            onClick={() => {toggleModal(); toggleContactModal(); closeMenu()}}
          >
            Contact
          </a>
          <div
            className="btn__menu--item light__button"
            onClick={() => {closeMenu(); toggleContrast()}}
          >
            Dark Mode
          </div>
          <div
            className="btn__menu--item dark__button"
            onClick={() => {closeMenu(); toggleContrast()}}
          >
            Light Mode
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
