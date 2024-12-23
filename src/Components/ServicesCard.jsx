import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    return (
        <div
            key={service._id}
            className=" overflow-hidden border shadow-md rounded-md  h-full "
        >
            <div className='flex-1 p-5 h-64'>
                {/* Service Image */}
                <img
                    src={service?.photo}
                    alt={service.name}
                    className=" transition-transform duration-300 ease-in-out hover:scale-110 h-full w-full  object-cover"
                />
            </div>
            {/* Service Details */}
            <div className="space-y-3 p-3  ">
                <p className="text-xl font-bold mb-2 ">{service.name}</p>
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
                            alt={service?.buyer?.name}
                            className="w-10 h-10 rounded-full mr-2"
                        />
                        <span className="text-gray-500 font-medium">
                            {service?.buyer?.name}
                        </span>
                    </div>
                    {/* Service Price */}
                    <p className="text-blue-500 font-bold">${service.price}</p>
                </div>
                {/* Service Area */}
                <p className="text-gray-600 mb-4">Area: {service.area}</p>
                {/* View Details Button */}
                <Link to={`/services/${service._id}`}>
                    <button className="  py-2 px-4 rounded-lg w-full ">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesCard;