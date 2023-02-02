import React from 'react';
import './footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

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
                <a href="https://github.com/kunaldhongade"><FaGithubSquare /></a>
                <a href="https://twitter.com/kunaldhongade"><FaTwitterSquare /></a>
                <a href="https://facebook.com/kunaldhongade99"><FaFacebookSquare /></a>
                <a href="https://linkedin.com/in/kunaldhongade"><FaLinkedin /></a>
                <a href="https://instagram.com/kunaldhongade99"><ImInstagram /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; 2023 Kunal Dhongade. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer
