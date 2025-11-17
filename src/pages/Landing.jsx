import React, { useState } from "react";

import "./Landing.css";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import Gallery from "../components/Gallery";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

import Teacup from "../gallery/Teacup";

function Landing() {
  const [contrastToggle, setContrastToggle] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContactOpen, setModalContactOpen] = useState(false);
  const [modalAboutOpen, setModalAboutOpen] = useState(false);

  function toggleContrast() {
    setContrastToggle(!contrastToggle);
    if (contrastToggle) {
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
    }
  }

  function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList.add("modal__overlay--visible");
    
    emailjs
      .sendForm(
        "service_g0nlx76",
        "template_yt3u68q",
        event.target,
        "VOaeM_EyQEysq2e7y"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly at dvdhyelee@gmail.com"
        );
      });
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
    if (modalOpen) {
      document.body.classList.remove("modal--open");
    } else {
      document.body.classList.add("modal--open");
    }
  }

  function toggleAboutModal() {
    setModalAboutOpen(!modalAboutOpen);
    if (modalAboutOpen) {
      document.body.classList.remove("modal__about--open");
    } else {
      document.body.classList.add("modal__about--open");
    }
  }

  function toggleContactModal() {
    setModalContactOpen(!modalContactOpen);
    if (modalContactOpen) {
      document.body.classList.remove("modal__contact--open");
    } else {
      document.body.classList.add("modal__contact--open");
    }
  }

  function closeModal() {
    setModalOpen(false);
    setModalAboutOpen(false);
    setModalContactOpen(false);
    document.body.classList.remove("modal--open");
    document.body.classList.remove("modal__about--open");
    document.body.classList.remove("modal__contact--open");
  }

  function openMenu() {
    document.body.classList.add("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div id="landing">

      <div className="landingview">
        <Nav
          toggleModal={toggleModal}
          toggleContactModal={toggleContactModal}
          toggleContrast={toggleContrast}
          openMenu={openMenu}
          closeMenu={closeMenu}
        ></Nav>
        <div className="landing__content">
          <div className="landing__content--text">
            <h1 className="landing__content--title">
              Hey <br></br>
              <span className="text--blue">I'm Timothee.</span>
            </h1>
            <p className="landing__content--description">
              I'm a <b className="text--blue">frontend software engineer</b> who
              loves to design and build innovative web applications using
              various technologies! Here's a bit more{" "}
              <b
                className="text--blue click"
                onClick={() => {
                  toggleModal();
                  toggleAboutModal();
                }}
              >
                about me.
              </b>
            </p>
            <ul className="landing__content--links">

              <li>
                <a
                  href="https://www.linkedin.com/in/timothee-djouokep-tchouamou-13a633bb/"
                  rel="noreferrer"
                  target="_blank"
                  className="landing__content--link"
                  id="link1"
                >
                  <i className="fa-brands fa-linkedin-in landing__content--link-img"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/timtchouamou"
                  rel="noreferrer"
                  target="_blank"
                  className="landing__content--link"
                  id="link2"
                >
                  <i className="fa-brands fa-github landing__content--link-img"></i>
                </a>
              </li>

              <li>
                <a
                  href="assets/resumeNOV3.pdf"
                  target="_blank"
                  className="landing__content--link"
                  id="link3"
                >
                  <i className="fa-regular fa-file-pdf landing__content--link-img"></i>
                </a>
              </li>

            </ul>

          </div>

          <div className="teacup__container">
            <Teacup></Teacup>
          </div>

        </div>

        <button className="mail__btn">
          <a
            href="#"
            onClick={() => {
              toggleModal();
              toggleContactModal();
            }}
          >
            <i className="fa-solid fa-envelope mail__btn--link"></i>
          </a>
        </button>
        
        <a href="#gallery" className="scroll">
          <div className="scroll__icon click"></div>
        </a>
        <Modal
          toggleModal={toggleModal}
          contact={contact}
          toggleAboutModal={toggleAboutModal}
          toggleContactModal={toggleContactModal}
          closeModal={closeModal}
        ></Modal>
      </div>

      <Gallery></Gallery>
      <Projects></Projects>
      <Footer></Footer>

    </div>
  );
}

export default Landing;
