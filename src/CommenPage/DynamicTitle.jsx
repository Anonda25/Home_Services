import React from 'react';

const DynamicTitle = ({title, subtitle}) => {
    return (
        <div
         className='my-10'>
            <p className='font-bold text-2xl text-center capitalize'>{title}</p>
            <p className='font-semibold  text-center w-3/4 mx-auto mt-4'>{subtitle}</p>
        </div>
    );
};

export default DynamicTitle;