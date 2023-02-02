import React from 'react';
import { ImLinkedin2 } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import { ImTwitter } from 'react-icons/im';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/kunaldhongade" rel="noreferrer" target="_blank"><ImLinkedin2 /></a>
            <a href="https://github.com/kunaldhongade" rel="noreferrer" target="_blank"><FaGithub /></a>
            <a href="https://twitter.com/kunaldhongade" rel="noreferrer" target="_blank"><ImTwitter /></a>
        </div>
    )
}

export default HeaderSocials
