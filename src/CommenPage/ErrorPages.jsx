import React from 'react';
import Navbar from './Navbar';
import ing404 from '../assets/404.png'
const ErrorPages = () => {
    return (
        <div>
           <Navbar></Navbar>
            <div className='flex justify-center items-center'>
                <img src={ing404} alt="" />
            </div>
        </div>
    );
};

export default ErrorPages;