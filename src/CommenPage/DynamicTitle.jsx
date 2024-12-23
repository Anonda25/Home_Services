import React from 'react';
import { motion } from "motion/react"
const DynamicTitle = ({title, subtitle}) => {
    return (
        <div
            
            className=" my-10"
           >
            <motion.p 
                initial={{ x: -100, opacity: 0 }}
                whileInView={
                    { x: 0, opacity: 1 }}
                transition={{
                    delay: 0.4,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1
                }}
            className='font-bold text-2xl text-center capitalize'>{title}</motion.p>
            <motion.p initial={{ x: 100, opacity: 0 }}
                whileInView={
                    { x: 0, opacity: 1 }}
                transition={{
                    delay: 0.4,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 2 },
                    ease: "easeIn",
                    duration: 1
                }} className='font-semibold  text-center w-3/4 mx-auto mt-4'>{subtitle}</motion.p>
        </div>
    );
};

export default DynamicTitle;