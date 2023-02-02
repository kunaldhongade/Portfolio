import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

// {/* Experience */}
const Skills = () => {
    return (
        <section id="skills">
            <h5>What Skills I Have </h5>
            <h2>Web 2.0 & 3.0</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>ReactJS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Redux</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>NodeJs</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Graphql</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>NextJs</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__blockchain">
                    <h3>Blockchain Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Solidity</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Ethereum</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Ethers.js</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Hardhat</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Molaris</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Alchemy</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Rust</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Oracles</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Chainlink</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
