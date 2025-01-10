import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    return (
        <div
            key={service._id}
            className=" overflow-hidden shadow-xl mb-5 p-5 flex flex-col  rounded-md   transition-transform duration-300 hover:scale-105 "
        >
            <div className=' '>
                {/* Service Image  here */}
                <img
                    src={service?.photo}
                    alt={service.name}
                    className="  object-cover w-full bg-cover h-[200px]  "
                />
            </div>
            {/* Service Details */}
            <div className=" justify-center flex flex-col flex-grow">
                <p className="text-xl font-bold mb-2 ">{service.name}</p>
                <p className=" mb-4 flex-grow">
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

