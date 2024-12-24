import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import img from '../assets/addings.gif'
import { motion } from 'motion/react';
import UserAxiosSecure from '../AuthProvider/UserAxiosSecure';
const UpdateServicePage = () => {
    const axiosSecure = UserAxiosSecure()
    const { state } = useLocation();
    const { post } = state ;  
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: post?.name ,
        price: post?.price ,
        description: post?.description 
    });

    const handleUpdate = async () => {
        try {
            const { data } = await axiosSecure.patch(`/services/${post._id}`, formData);
            if (data.modifiedCount > 0) {
                Swal.fire("Updated!", "Service updated successfully.", "success");
                navigate('/manageService'); 
            } else {
                Swal.fire("Error", "Failed to update the service.", "error");
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "An error occurred while updating.", "error");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row">
            
            <div className='flex-1'>
                <motion.img initial={{ x: -100, opacity: 0 }}
                    whileInView={
                        { x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                        duration: 1
                    }} src={img} alt="" />
            </div>
            <motion.div initial={{x: 100, opacity: 0 }}
                whileInView={
                    { x: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1
                }} className='flex-1'>
                <form>
                    <label className="block mb-2">
                        Service Name :
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="block w-full mt-1 p-2 border rounded"
                        />
                    </label>
                    <label className="block mb-2">
                        Price:
                        <input
                            type="number"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            className="block w-full mt-1 p-2 border rounded"
                        />
                    </label>
                    <label className="block mb-4">
                        Description:
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="block w-full mt-1 p-2 border rounded"
                        ></textarea>
                    </label>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={handleUpdate}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/manageService')}
                            className="bg-gray-300 px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default UpdateServicePage;
