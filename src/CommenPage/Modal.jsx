import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Modal = ({ service, onClose }) => {
    const {user}=useContext(AuthContext)
    const currentUser = user; 
    const navigate = useNavigate()
    const [date, setDate] = useState('');
    const [instructions, setInstructions] = useState('');
    console.log(service);
    const { buyer } = service;


    const handlePurchase = async () => {
        const bookingDetails = {
            serviceId: service._id,
            name: service.name,
            photo: service.photo,
            buyer: buyer.email,
            buyerName: buyer.name,
            email: currentUser.email,
            userName: currentUser.displayName,
            serviceDate: date,
            description: instructions,
            price: service.price,
            serviceStatus: 'pending',
        };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/serviceStatus`, bookingDetails);
            navigate('/bookedServices')
            onClose();
            
        } catch (error) {
            console.error('Error booking service:', error);
            Swal.error('Failed to book the service. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 ">
                <h3 className="text-xl font-bold mb-4">Book Service</h3>
                <p className="mb-2"><span  className='text-xl font-semibold'>Service ID:</span > {service._id}</p>
                <p className="mb-2"><span  className='text-xl font-semibold'>Service Name:</span > {service.name}</p>
                <p className="mb-2"><span  className='text-xl font-semibold'>Provider Email:</span > {buyer.email}</p>
                <p className="mb-2"><span  className='text-xl font-semibold'>Provider Name:</span > {buyer.name}</p>
                <p className="mb-2"><span  className='text-xl font-semibold'>Your Email:</span > {currentUser.email}</p>
                <p className="mb-2"><span  className='text-xl font-semibold'>Your Name:</span > {currentUser.displayName}</p>
                <p className="mb-2"><span  className='text-xl font-semibold'>Price:</span > ${service.price}</p>
                {/* Editable Fields */}
                <label className="block mb-2">
                    <span className=' font-semibold'>Service Taking Date:</span>
                    <input
                        type="date"
                        className="w-full border rounded p-2"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label className="block mb-4">
                    <span>Special Instructions:</span>
                    <textarea
                        className="w-full border rounded p-2"
                        rows="3"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                    ></textarea>
                </label>
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                        onClick={handlePurchase}
                    >
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
