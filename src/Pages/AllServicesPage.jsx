import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicTitle from '../CommenPage/DynamicTitle';
import ServicesCard from '../Components/ServicesCard';

const AllServicesPage = () => {
    const [services, setservise] = useState([])
    useEffect(() => {
        fatchAllService()
    }, [])

    console.log(services);
    const fatchAllService = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services`)
        setservise(data);
    }
    return (


        <div className="container mx-auto px-4">
            <div className='flex'>
                <div className="divider divider-secondary w-full">
                    <p>All Services</p>

                </div>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div>
                <DynamicTitle title={'this is a all services page'} subtitle={'We provide your all required handyman services into your location'}></DynamicTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-10 mb-10">
                {
                    services.map((service) => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};


export default AllServicesPage;