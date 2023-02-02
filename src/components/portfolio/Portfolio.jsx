import React from 'react';
import './portfolio.css';
import CrowF from '../../assets/CrowF.png';
import Ruru from '../../assets/Ruru.png';
import Dtwitter from '../../assets/Dtwitter.png';

const data = [
    {
        id: 1,
        image: CrowF,
        alt: 'CrowF',
        title: 'CrowF - Crowdfunding app on Polygon',
        github: 'https://github.com/kunaldhongade/crowf',
        demo: 'https://crowf.vercel.app',
    },
    {
        id: 2,
        image: Ruru,
        alt: 'ruru',
        title: 'RURU - NFT marketplace build on Polygon',
        github: 'https://github.com/kunaldhongade/ruru',
        demo: 'https://crowf.vercel.app',
    },
    {
        id: 1,
        image: Dtwitter,
        alt: 'dtwitter',
        title: 'Twitter - Crowdfunding app on Polygon',
        github: 'https://github.com/kunaldhongade/Dtwitter',
        demo: 'http://dtwitter-inky.vercel.app/',
    },
]

const Portfolio = () => {
    return (
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, alt, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={alt} srcset="" href={demo} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;
