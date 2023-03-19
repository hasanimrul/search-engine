import React from 'react';
import { GrRadialSelected } from "react-icons/gr";

const TextSection = () => {
    return (
        <div className='flex flex-col items-center mt-5'>
            <h1 className='text-3xl font-bold font-mono'>Tired of being tracked online? We can help.</h1>
            <p className='mt-3'>Get seamless privacy protection on your browser for free with one download:</p>
            <div className='flex gap-4'>
                <p className='flex items-center gap-2 font-bold text-green-600'><GrRadialSelected />Private Search</p>
                <p className='flex items-center gap-2 font-bold text-green-600'><GrRadialSelected />Tracker Blocking</p>
                <p className='flex items-center gap-2 font-bold text-green-600'><GrRadialSelected />Site Encryption</p>
            </div>
            <button className=' mt-5 bg-green-700 p-3 rounded text-white cursor-pointer hover:bg-gray-600'>Add Cheetah to Chrome</button>
        </div>
    );
};

export default TextSection;