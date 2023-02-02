import React from 'react';
import './nav.css';
import { HiHome } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs';
import { MdWebStories } from 'react-icons/md';
import { GiStarsStack } from 'react-icons/gi';
import { RiMessage3Fill } from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} rel='noreferrer'><HiHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} rel='noreferrer'> <BsFillPersonFill /></a>
            <a href="#skills" rel='noreferrer' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiStarsStack /></a>
            <a href="#projects" rel='noreferrer' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdWebStories /></a>
            <a href="#contact" rel='noreferrer' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage3Fill /></a>
        </nav >
    )
}

export default Nav;
