import logo from '../assets/picture.png'
import { motion } from 'motion/react';
const Banner = () => {
    return (
        <div className=" ">
            <div className='flex justify-between flex-col-reverse lg:flex-row  items-center '>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={
                        { x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.4,
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                        duration: 1
                    }}
                className='pl-10  flex-1 space-y-5 text-left'>
                    <h1 className='text-2xl font-bold capitalize text-blue-800 '>Find Your </h1>
                    <p className='uppercase text-4xl font-bold text-[#FF4780]'>Dream Home</p>
                    <p>Satisfaction guarantee, because of your happiness our goal</p>
                    <p className=''>Home Service is a British folk rock group, formed in late 1980 from a nuceus of musicians who had been playing in Ashley Hutchings' Albion Band. Their career is generally agreed to have peaked with the album Alright Jack,citation needed and has had an influence on later work.John Tams and several other members of the band, have had solo careers and worked in other projects. In 2016 John Kirkpatrick replaced Tams as main singer in Home Service, and features as such on their next album.l</p>
                    <button>All Services</button>
                </motion.div>
                
                <div className=' flex-1'>
                    <motion.img  
                        initial={{ x: 100, opacity: 0 }}
                        viewport={{once:true}}
                        whileInView={
                            { x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.2 },
                            ease: "easeIn",
                            duration: 1
                        }}
                    src={logo} alt="" className='w-full'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;