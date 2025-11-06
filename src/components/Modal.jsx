import React from "react";
import "./Modal.css";

function Modal({ contact, closeModal }) {

  return (
    <div>

       <div className="modal modal__original">

        <div className="modal__half modal__about">
          <h2 className="modal__title">Here's a bit about me.</h2>
          <h2 className="modal__subtitle">Frontend Software Engineer</h2>
          <p className="modal__description">
            I'm a 38 year-old{" "}
            <b className="text--blue">frontend software engineer </b>
            with a strong passion for developing websites with great user
            experiences.
            <br></br> I have a varied background with experience in engineering,
            trading, teaching, and more! I currently live in Sylver Spring, Marylnad,
            but I am always open to new experiences!
          </p>
          <div className="languages" id="languages">
            <div className="language__list">
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/html.png`}
                  alt="html icon"
                  className="language__icon"
                ></img>
                <span className="language__name">HTML</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/css-3.png`}
                  alt="css icon"
                  className="language__icon"
                ></img>
                <span className="language__name">CSS</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/js.png`}
                  alt="js icon"
                  className="language__icon"
                ></img>
                <span className="language__name">JavaScript</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/typescript.png`}
                  alt="typescript icon"
                  className="language__icon"
                ></img>
                <span className="language__name">TypeScript</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/react.png`}
                  alt="react icon"
                  className="language__icon"
                ></img>
                <span className="language__name">React</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/linux.png`}
                  alt="java icon"
                  className="language__icon"
                ></img>
                <span className="language__name">Linux</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/ansible.png`}
                  alt="python icon"
                  className="language__icon"
                ></img>
                <span className="language__name">Ansible</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/nextjs.png`}
                  alt="wordpress icon"
                  className="language__icon"
                ></img>
                <span className="language__name">Next.js</span>
              </div>
            </div>
          </div>
        </div>


        <div className="modal__half modal__contact">
          <h2 className="modal__title">Let's have a chat!</h2>
          <h2 className="modal__subtitle">
            I'm currently open to new opportunities.
          </h2>
          <form action="" className="contact__form" onSubmit={contact}>
            <div className="form__item">
              <label htmlFor="user_name" className="form__item--label">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="input"
                id="user_name"
                required
              ></input>
            </div>
            <div className="form__item">
              <label htmlFor="user_email" className="form__item--label">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="input"
                id="user_email"
                required
              ></input>
            </div>
            <div className="form__item">
              <label htmlFor="message" className="form__item--label">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="input"
                id="message"
                required
              ></textarea>
            </div>
            <button id="contact__submit" className="form__submit">
              Send it my way
            </button>
          </form>
          <div className="modal__overlay modal__overlay--loading">
            <i className="fas fa-spinner"></i>
          </div>
          <div className="modal__overlay modal__overlay--success">
            Thanks for the message! Looking forward to connecting.
          </div>
          <i
            className="fas fa-times modal__exit click"
            onClick={closeModal}
          ></i>
        </div>

      </div>

    
      <div className="modal__overlay--exit" onClick={closeModal}></div>

      <div className="modal modal__about--mobile">

        <div className="modal__half modal__about">
          <h2 className="modal__title">Here's a bit about me.</h2>
          <h2 className="modal__subtitle">Frontend Software Engineer</h2>
          <p className="modal__description">
            I'm a 38 year-old{" "}
            <b className="text--orange">frontend software engineer</b>
            with a strong passion for developing websites with great user
            experiences.
            <br></br> I have a varied background with experience in engineering,
            trading, teaching, and more! I currently live in Sylver Spring, Maryland,
            but I am always open to new experiences!
          </p>

          <div className="languages" id="languages">
            <div className="language__list">
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/html.png`}
                  alt="html icon"
                  className="language__icon"
                ></img>
                <span className="language__name">HTML</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/css-3.png`}
                  alt="css icon"
                  className="language__icon"
                ></img>
                <span className="language__name">CSS</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/js.png`}
                  alt="js icon"
                  className="language__icon"
                ></img>
                <span className="language__name">JavaScript</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/typescript.png`}
                  alt="typescript icon"
                  className="language__icon"
                ></img>
                <span className="language__name">TypeScript</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/react.png`}
                  alt="react icon"
                  className="language__icon"
                ></img>
                <span className="language__name">React</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/linux.png`}
                  alt="java icon"
                  className="language__icon"
                ></img>
                <span className="language__name">Linux</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/ansible.png`}
                  alt="python icon"
                  className="language__icon"
                ></img>
                <span className="language__name">Ansible</span>
              </div>
              <div className="language">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/nextjs.png`}
                  alt="wordpress icon"
                  className="language__icon"
                ></img>
                <span className="language__name">Next.js</span>
              </div>
            </div>
          </div>

          <i
            className="fas fa-times modal__exit click modal__exit--about"
            onClick={closeModal}
          ></i>
        </div>

      </div>
      

      <div className="modal modal__contact--mobile">
        
        <div className="modal__half modal__contact">
          <h2 className="modal__title">Let's have a chat!</h2>
          <h2 className="modal__subtitle">
            I'm currently open to new opportunities.
          </h2>
          <form action="" className="contact__form" onSubmit={contact}>
            <div className="form__item">
              <label htmlFor="user_name" className="form__item--label">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="input"
                id="user_name"
                required
              ></input>
            </div>
            <div className="form__item">
              <label htmlFor="user_email" className="form__item--label">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="input"
                id="user_email"
                required
              ></input>
            </div>
            <div className="form__item">
              <label htmlFor="message" className="form__item--label">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="input"
                id="message"
                required
              ></textarea>
            </div>
            <button id="contact__submit" className="form__submit">
              Send it my way
            </button>
          </form>
          <div className="modal__overlay modal__overlay--loading">
            <i className="fas fa-spinner"></i>
          </div>
          <div className="modal__overlay modal__overlay--success">
            Thanks for the message! Looking forward to connecting.
          </div>
          <i
            className="fas fa-times modal__exit click"
            onClick={closeModal}
          ></i>
        </div>
      </div>

    </div>
  );
}

export default Modal;
