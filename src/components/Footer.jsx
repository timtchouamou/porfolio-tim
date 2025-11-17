import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
        <div className="footer__content">
            <div className="footer__logocontainer">
                <a href="#" className="footer__anchor">
                    <img src="assets/footerlogo.png" className="footer__logo" alt="footer logo"></img>
                    <span className="footer__logo__popper">
                        Top
                        <i className="fas fa-arrow-up"></i>
                    </span>
                </a>
            </div>
            <ul className="footer__social-links">
                <li className="footer__social-link">
                    <a href="https://www.linkedin.com/in/timothee-djouokep-tchouamou-13a633bb/" target="_blank">LinkedIn</a>
                </li>
                <li className="footer__social-link">
                    <a href="https://github.com/timtchouamou" target="_blank">GitHub</a>
                </li>
                <li className="footer__social-link">
                    <a href="assets/resumeNOV3.pdf" target="_blank">Resume</a>
                </li>
            </ul>
            <p className="copyright">Copyright © 2025 Timothee Djouokep Tchouamou</p>
        </div>
    </footer>
  )
}

export default Footer