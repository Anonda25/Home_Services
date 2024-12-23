import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import DynamicTitle from '../CommenPage/DynamicTitle';
import { Link } from 'react-router-dom';
import UserAxiosSecure from '../AuthProvider/UserAxiosSecure';

const PopulerService = () => {
    const axiosSecure =UserAxiosSecure()
    const [services, setservise] = useState([])
    useEffect(() => {
        fatchAllService()
    }, [])

    const fatchAllService = async () => {
        const { data } = await axiosSecure.get(`/services`)
        setservise(data);
    }
    return (
        <div>
           
            <div>
                <DynamicTitle title={'this is populer servicess card '} subtitle={'Connect with trusted experts for all your home needs, from minor fixes to major renovations. Enjoy seamless booking, transparent pricing, and reliable support—all designed to make home care effortless and stress-free. Whether it’s plumbing, electrical work, cleaning, or appliance installation, our platform'}></DynamicTitle>
            </div>
            <div className='grid lg:grid-cols-2  gap-4'>
                {
                    services.slice(0, 6).map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>

            <Link to={'/allservices'} className='flex items-center justify-center my-5'>
                <button >show All services</button>
            </Link>
        </div>
    );
};

export default PopulerService;