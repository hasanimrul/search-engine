import React from 'react';
import img from '../assets/vpn.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const VpnSection = () => {
    AOS.init();
    return (
        <div className='flex flex-col items-center text-center my-16 w-full bg-green-900 py-16 text-white'>
            <h1 className='text-3xl mb-5 font-bold font-mono' data-aos="fade-down" data-aos-duration="3000">Privacy Recommendations.</h1>
            <p className='mb-5' data-aos="fade-up-right" data-aos-duration="3000">• When you use a VPN it helps hide your location and obfuscates websites from spying you. We highly recommend <br /> AmbitVPN because it works anywhere in the world, has the highest standard of post quantum encryption and is  very <br /> reliable; it even speeds up your internet connection and reduces “throttling” by your Internet Service Provider.</p>
            <p className=' mb-5' data-aos="fade-up-left" data-aos-duration="3000">• Make sure you block cookies in your browser. Cookies are small files which are stored on a user’s computer and are <br /> used to re-target you and track what you are doing and seeing on the internet. Even though Cheetah doesn’t store cookies <br /> on your computer, some the sites you visit will when you click on them. You can also use the Cheetah WormHole App <br /> which provides a Virtual Tunnel and prevents cookies from being stored on your mobile device. <br />
                <span className='text-orange-300 cursor-pointer hover:underline'>Try Ambit VPN now – 14 day free trial</span></p>
            <img src={img} className='md:w-1/3' alt='vpn' data-aos="zoom-in-up" data-aos-duration="3000" />
        </div>
    );
};

export default VpnSection;