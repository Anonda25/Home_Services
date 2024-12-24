import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import addingLogo from '../assets/adding.webp'
import UserAxiosSecure from '../AuthProvider/UserAxiosSecure';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const AddService = () => {
    const navigate = useNavigate()
    const axiosSecure = UserAxiosSecure()
    const { user } = useContext(AuthContext)
    const handlerAddService = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const area = form.area.value;
        const photo = form.photo.value;
        const description = form.description.value;
        if (description.length < 100) {
            Swal.fire({
                icon: 'error',
                title: 'Description Too Short',
                text: 'Description must be at least 100 characters long.',
            });
            return;
        }

        const service = {
            name,
            buyer: {
                email: user.email,
                name: user.displayName,
                photo: user.photoURL
            },

            price,
            area,
            photo,
            description
        };
        
        const { data } = await axiosSecure.post(`/services`, service)
       if(data){
           navigate('/allservices')
       }else{
        console.log(data);
       }

    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
                <motion.img 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={
                        { x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                        duration: 1
                    }}
                src={addingLogo} alt="" />
            </div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={
                    { x: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1
                }}
            className="flex-1">
                <form onSubmit={handlerAddService} className="card-body">
                    {/* Add Service Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Service Name"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="flex gap-3">
                        {/* Add Price */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Add Service Area */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Service Area</span>
                            </label>
                            <input
                                type="text"
                                name="area"
                                placeholder="Service Area"
                                className="input input-bordered"
                                required
                            />
                        </div>
                    </div>

                    {/* Add Image URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input
                            type="url"
                            name="photo"
                            placeholder="Image URL"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Add Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            placeholder="Please type a minimum Description (15)"
                            name="description"
                            className="textarea textarea-bordered textarea-md w-full"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button type="submit" >
                            Add Service
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AddService;
