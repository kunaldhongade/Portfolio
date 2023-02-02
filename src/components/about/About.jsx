import React from 'react';
import './about.css';
import Kunal_about from '../../assets/Kunal_about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Kunal_about} alt="Kunal About" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Tech Skills</h5>
                            <small>50+ wizards</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p>
                        I am an experienced Ethereum blockchain developer with a passion for decentralized systems and smart contract development. With extensive knowledge of Solidity and the Ethereum ecosystem, I am well-equipped to build secure and scalable decentralized applications on the Ethereum platform. My expertise in Ethers.js, Hardhat, and Infura allows me to seamlessly integrate decentralized applications with the Ethereum network. I am also experienced in working with React.js for front-end development, which enhances the user experience of my decentralized applications. My commitment to writing clean and efficient code, combined with my ability to deliver high-quality results on time, makes me an asset to any blockchain development team.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;
