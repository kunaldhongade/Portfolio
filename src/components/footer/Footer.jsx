import React from 'react';
import './footer.css';
import { SlSocialFacebook } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs';
import { SlSocialTwitter } from 'react-icons/sl';
import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Kunal Dhongade</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://github.com/kunaldhongade"><TbBrandGithub className="footer__socials-icon" /></a>
                <a href="https://twitter.com/kunaldhongade"><SlSocialTwitter className="footer__socials-icon" /></a>
                <a href="https://facebook.com/kunaldhongade99"><SlSocialFacebook className="footer__socials-icon" /></a>
                <a href="https://linkedin.com/in/kunaldhongade"><SlSocialLinkedin className="footer__socials-icon" /></a>
                <a href="https://instagram.com/kunaldhongade99"><BsInstagram className="footer__socials-icon" /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; 2023 Kunal Dhongade. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer
