import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Modal = ({ service, onClose }) => {
    const {user}=useContext(AuthContext)
    const currentUser = user; // Replace with actual user data
    const [date, setDate] = useState('');
    const [instructions, setInstructions] = useState('');
    console.log(service);
    const { buyer } = service;


    const handlePurchase = async () => {
        const bookingDetails = {
            serviceId: service._id,
            serviceName: service.name,
            serviceImage: service.photo,
            providerEmail: buyer.email,
            providerName: buyer.name,
            userEmail: currentUser.email,
            userName: currentUser.displayName,
            serviceDate: date,
            specialInstructions: instructions,
            price: service.price,
            serviceStatus: 'pending',
        };

        // try {
        //     await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, bookingDetails);
        //     alert('Service booked successfully!');
        //     onClose();
        // } catch (error) {
        //     console.error('Error booking service:', error);
        //     alert('Failed to book the service. Please try again.');
        // }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-96">
                <h3 className="text-xl font-bold mb-4">Book Service</h3>
                <p className="mb-2"><strong>Service ID:</strong> {service._id}</p>
                <p className="mb-2"><strong>Service Name:</strong> {service.name}</p>
                <p className="mb-2"><strong>Provider Email:</strong> {buyer.email}</p>
                <p className="mb-2"><strong>Provider Name:</strong> {buyer.name}</p>
                <p className="mb-2"><strong>Your Email:</strong> {currentUser.email}</p>
                <p className="mb-2"><strong>Your Name:</strong> {currentUser.displayName}</p>
                <p className="mb-2"><strong>Price:</strong> ${service.price}</p>
                {/* Editable Fields */}
                <label className="block mb-2">
                    <span>Service Taking Date:</span>
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
