import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    console.log(service);
    return (
        <div
            key={service._id}
            className="bg-white  overflow-hidden border  h-full "
        >
            <div className='flex-1 p-5 h-64'>
                {/* Service Image */}
                <img
                    src={service?.photo}
                    alt={service.name}
                    className=" transition-transform duration-300 ease-in-out hover:scale-110 h-full w-full "
                />
            </div>
            {/* Service Details */}
            <div className="space-y-3 p-3  ">
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
    );
};

export default ServicesCard;