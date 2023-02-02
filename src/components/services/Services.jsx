import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
// services
const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Extensive knowledge of UI/UX design principles, methods, and tools.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Strong proficiency in design software such as Sketch, Figma, Adobe XD, or similar</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Experience with responsive design and cross-device compatibility.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Understanding of the importance of accessibility and experience implementing accessibility standards (such as WCAG).</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Ability to design and implement animations, transitions, and micro-interactions.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Knowledge of agile development methodologies and design thinking practices.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Ability to analyze user data and usage patterns to inform design decisions and enhance user attention.</p>
                        </li>
                    </ul>
                </article>
                {/** end of ui ux */}
                <article className="service">
                    <div className="service__head">
                        <h3>Blockchain Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <div>

                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Solid understanding of Ethereum blockchain and its underlying technologies (such as cryptography, consensus algorithms, and distributed systems).</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Experience with Ethereum development tools and frameworks (such as Hardhat, Remix, Solidity, and Ethers.js)/</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Knowledge of security best practices in smart contract development, including common attacks and vulnerabilities (such as reentrancy, overflow/underflow, and gas limits).</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Familiarity with decentralized storage solutions (such as IPFS and Swarm) and integrating them with smart contracts</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Knowledge of scaling solutions for Ethereum, such as sharding and layer 2 solutions (such as Optimism, Polygon).</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Familiarity with development methodologies and practices, such as Test Driven Development (TDD), continuous integration, and continuous deployment (CI/CD)</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Proficiency in writing and deploying smart contracts using Solidity programming language</p>
                        </li>
                    </ul>
                </article>
                {/** End of Blockchain Development */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Proficiency in ReactJS, including its core principles, such as component architecture and virtual DOM.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Understanding of modern front-end build pipelines and tools, such as Webpack, Babel, and NPM.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Knowledge of Redux, React Router, and React Hooks.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Experience with creating RESTful APIs & understanding of server-side programming, Node.js & Express.js.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Knowledge of database systems, such as MongoDB, and SQL and Familiarity with Git and version control.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Understanding of authentication and authorization between multiple systems, servers, and environments.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Strong problem-solving and debugging skills and Good communication skills and ability to work in a team.</p>
                        </li>
                    </ul>
                </article>
                {/**End of WEb Development */}

            </div>
        </section>
    );
};

export default Services;
