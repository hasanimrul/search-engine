import React from 'react';
import img1 from '../assets/st-img1.svg'
import img2 from '../assets/st-img2.svg'
import img3 from '../assets/st-img3.svg'


import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
    AOS.init();
    return (
        <div className='my-16'>
            <h2 className='text-center text-3xl font-bold font-mono mb-20'>Why Cheetah ?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-around gap-20 mb-16'>
                <img src={img1} alt='' data-aos="zoom-in" data-aos-duration="3000" />
                <div data-aos="fade-left" data-aos-duration="3000">
                    <h2 className='text-xl font-bold'>Our anonymous search engine does not <br /> store your data!</h2>
                    <p className='text-gray-500'>Cheetah has no interest in your data. In our search <br /> engine, your data is neither stored nor is a search <br /> history built up - thus we guarantee absolute <br /> anonymity.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-around gap-20 mb-16'>

                <div data-aos="fade-right" data-aos-duration="3000">
                    <h2 className='text-xl font-bold'>Anonymous search engine with own <br /> search index</h2>
                    <p className='text-gray-500'>Our self-image: Cheetah is the European answer to <br /> Google & Co. The high quality of our search results is <br /> based on our own index and our years of technology <br /> expertise.</p>
                </div>
                <img src={img2} alt='' data-aos="zoom-in" data-aos-duration="3000" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-around gap-20'>
                <img src={img3} alt='' data-aos="zoom-in" data-aos-duration="3000" />
                <div data-aos="fade-left" data-aos-duration="3000">
                    <h2 className='text-xl font-bold'>Family friendly, secure and anonymous <br /> search engine with own search index</h2>
                    <p className='text-gray-500'>Both pornographic and sexual content are not <br /> indexed and not displayed by our search engine. We <br /> want children to be able to search the Internet safely. <br /> At home and at school.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;