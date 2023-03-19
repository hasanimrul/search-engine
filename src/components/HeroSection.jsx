import React from 'react';
import img from '../assets/money.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    AOS.init();
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-around my-16'>
            <img src={img} alt='money' data-aos="zoom-out" data-aos-duration="3000" />
            <h3 className='text-2xl font-serif font-bold italic' data-aos="fade-left" data-aos-duration="3000">Searching with <span className='text-green-600'>Cheetah</span> puts money in the pockets <br /> of your favorite content creators.</h3>
        </div>
    );
};

export default HeroSection;