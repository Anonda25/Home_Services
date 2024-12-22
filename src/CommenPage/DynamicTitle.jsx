import React from 'react';

const DynamicTitle = ({title, subtitle}) => {
    return (
        <div>
            <p className='font-bold text-2xl text-center'>{title}</p>
            <p className='font-semibold text-xl text-center'>{subtitle}</p>
        </div>
    );
};

export default DynamicTitle;