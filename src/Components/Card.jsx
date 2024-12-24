import DynamicTitle from "../CommenPage/DynamicTitle";
import { motion } from "motion/react";
import { MdOutlineLocalMovies } from "react-icons/md";
const Card = () => {
    return (
        <div>
            <div>
                <DynamicTitle title={'the services per month'} subtitle={'If you need any service, you can take it from any one. '}></DynamicTitle>
            </div>

            <div className='grid lg:grid-cols-3 gap-5 my-10  p-10 '>

                <motion.div initial={{ y: 100, opacity: 0 }}
                    whileInView={
                        { y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                        duration: 1
                    }} className=' p-10 text-center shadow-2xl space-y-4 rounded-md hover:bg-[#3e12de7c] hover:text-white transition-transform duration-300 ease-in-out hover:scale-90 '>
                    <div >
                        <MdOutlineLocalMovies className="text-5xl font-bold text-center mx-auto text-blue-500" />
                        
                    </div>
                    <p className='text-3xl font-bold'>Basic</p>
                    <p className='text-xl font-bold text-green-500'>$5 / Month</p>
                    <p className='text-xl font-semibold'>5 Service Per Month</p>
                    <p className='text-xl font-semibold'> Up comming New  service</p>
                    <p className='text-xl font-semibold'>No services Bonuses</p>
                    <button>Percess Now</button>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }}
                    whileInView={
                        { y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                        duration: 1
                    }} className=' p-10 text-center shadow-2xl space-y-4 rounded-md hover:bg-[#e6eeb3] hover:text-white transition-transform duration-300 ease-in-out hover:scale-90'>
                    <MdOutlineLocalMovies className="text-5xl font-bold text-center mx-auto text-yellow-400" />
                    <p className='text-3xl font-bold text-yellow-400'>Premium</p>
                    <p className='text-xl font-bold text-green-500'>$20 / Month</p>
                    <p className='text-xl font-semibold'>20  Service Per Month</p>
                    <p className='text-xl font-semibold'> 15 Up Comming service</p>
                    <p className='text-xl font-semibold'> Priority Support</p>
                    <button>Percess Now</button>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }}
                    whileInView={
                        { y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                        duration: 1
                    }} className=' p-10 text-center shadow-2xl space-y-4 rounded-md hover:bg-[#839098] hover:text-white transition-transform duration-300 ease-in-out hover:scale-90'>
                    <MdOutlineLocalMovies className="text-5xl font-bold text-center mx-auto text-green-500" />
                    <p className='text-3xl font-bold text-gray-500 '>Silver</p>
                    <p className='text-xl font-bold text-green-500'>$10 / Month</p>
                    <p className='text-xl font-semibold'>12  Service Per Month</p>
                    <p className='text-xl font-semibold'> One New service</p>
                    <p className='text-xl font-semibold'> Priority Support</p>
                    <button>Percess Now</button>
                </motion.div>
              
                


            </div>


        </div>
    );
};

export default Card;