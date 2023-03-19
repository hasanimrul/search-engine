import React from 'react';
import img1 from '../assets/laptop.svg'
import img2 from '../assets/mobile.svg'
import img3 from '../assets/search.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeCard = () => {
    AOS.init();
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 my-16 md:mx-20'>
            <div className='flex flex-col items-center bg-gray-700 p-10 rounded-lg text-white text-justify' data-aos="zoom-in-down" data-aos-duration="3000">
                <img src={img1} alt='' />
                <h3 className='text-2xl font-bold mb-2'>Privacy for Chrome</h3>
                <p>Browse as usual, and we'll take care of the rest. We bundled our search engine, tracker blocker, and encryption enforcer into one Chrome Extension.</p>
            </div>
            <div className='flex flex-col items-center bg-gray-700 text-white text-justify p-10 rounded-lg' data-aos="zoom-in-down" data-aos-duration="3000">
                <img src={img2} alt='' />
                <h3 className='text-2xl font-bold mb-2'>Privacy Browser App</h3>
                <p>Our private browser for mobile comes equipped with our search engine, tracker blocker, encryption enforcer, and more. Available on iOS & Android.</p>
            </div>
            <div className='flex flex-col items-center bg-gray-700 text-white text-justify p-10 rounded-lg' data-aos="zoom-in-down" data-aos-duration="3000">
                <img src={img3} alt='' />
                <h3 className='text-2xl font-bold mb-2'>Private Search Engine</h3>
                <p>Search privately with our app or extension, add private web search to your favorite browser, or search directly at cheetah.com.</p>
            </div>
        </div>
    );
};

export default HomeCard;