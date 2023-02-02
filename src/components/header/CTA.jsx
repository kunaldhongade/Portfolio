import React from 'react';
import KunalResume from '../../assets/KunalResume.pdf';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={KunalResume} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA
