import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../CommenPage/Modal';
import DynamicTitle from '../CommenPage/DynamicTitle';
import UserAxiosSecure from '../AuthProvider/UserAxiosSecure';

const SingleServiceDetails = () => {
    const { id } = useParams();
    const axiosSecure = UserAxiosSecure()
    const [service, setService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchServiceDetails();
    }, []);

    const fetchServiceDetails = async () => {
        try {
            const { data } = await axiosSecure.get(`/services/${id}`);
            setService(data);
        } catch (error) {
            console.error('Error fetching service details:', error);
        }
    };

    const handleBookNow = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="container mx-auto px-4">
            <div>
                <DynamicTitle title={'this is a single cards Detelis'} subtitle={'If you want to book this page, press the book Now button.'}></DynamicTitle>
            </div>
            {service ? (
                <>
                    <div className=" rounded-lg  p-2 overflow-hidden flex items-center justify-center">
                       <div className='p-5 '>
                            {/* Service Image */}
                            <img
                                src={service.photo}
                                alt={service.name}
                                className="w-[300px] h-[300px]"
                            />
                       </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
                            <p className="text-gray-600 mb-4">
                                {service.description.length > 100
                                    ? `${service.description.substring(0, 100)}...`
                                    : service.description}
                            </p>
                            <div className="flex items-center mb-4">
                                <img
                                    src={service?.photo}
                                    alt={service?.photo}
                                    className="w-12 h-12 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-medium">{service.name}</p>
                                    <p className="text-gray-500 text-sm">Location: {service.area}</p>
                                </div>
                            </div>
                            <p className="text-blue-500 font-bold text-xl mb-4">${service.price}</p>
                            {/* Book Now Button */}
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                onClick={handleBookNow}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                    {/* Modal Component */}
                    {isModalOpen && (
                        <Modal
                            service={service}
                            onClose={() => setIsModalOpen(false)}
                        />
                    )}
                </>
            ) : (
                <p>Loading service details...</p>
            )}
        </div>
    );
};

export default SingleServiceDetails;
