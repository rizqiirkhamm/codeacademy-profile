import React from "react";
import "./footer.css"

const Footer = () => {
return (
<footer className="footer">
    <div className="fotter__container container">
        <h1 className="footer__title">CodeAcademy</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__list">
                    About
                </a>
            </li>
            <li>
                <a href="#portfolio" className="footer__list">
                    Projects
                </a>
            </li>
        </ul>

        <div className="footer__social">
            <a href="https://www.facebook.com/" className="footer__social-link" rel="noreferre">
                <i class="bxl bcl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" className="footer__social-link" rel="noreferre">
                <i class="bxl bxl-instagram"></i>
            </a>
            <a href="https://twitter.com/" className="footer__social-link" rel="noreferre">
                <i class="bxl bxl-twitter"></i>
            </a>
        </div>

        <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved</span>
    </div>
</footer>
);
};

export default Footer;