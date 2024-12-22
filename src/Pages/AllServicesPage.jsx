import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllServicesPage = () => {
    const [services, setservise] = useState([])
    useEffect(() => {
        fatchAllService()
    }, [])

    console.log(services);
    const fatchAllService = async()=>{
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services`)
        setservise(data);
    }
    return (

    
        <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-bold mb-8">All Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div
                        key={service._id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden border"
                    >
                        {/* Service Image */}
                        <img
                            src={service?.photo}
                            alt={service.name}
                            className="w-full h-40 object-cover"
                        />
                        {/* Service Details */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                            <p className="text-gray-600 mb-4">
                                {service.description.length > 100
                                    ? `${service.description.substring(0, 100)}...`
                                    : service.description}
                            </p>
                            <div className="flex items-center justify-between mb-4">
                                {/* Provider Info */}
                                <div className="flex items-center">
                                    <img
                                        src={service?.buyer?.photo}
                                        alt={service.providerName}
                                        className="w-10 h-10 rounded-full mr-2"
                                    />
                                    <span className="text-gray-800 font-medium">
                                        {service.name}
                                    </span>
                                </div>
                                {/* Service Price */}
                                <p className="text-blue-500 font-bold">${service.price}</p>
                            </div>
                            {/* Service Area */}
                            <p className="text-gray-600 mb-4">Area: {service.area}</p>
                            {/* View Details Button */}
                            <Link to={`/services/${service._id}`}>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">
                                    View Details
                                </button>
                           </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
 

export default AllServicesPage;