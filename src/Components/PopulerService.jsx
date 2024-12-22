import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import DynamicTitle from '../CommenPage/DynamicTitle';
import { Link } from 'react-router-dom';

const PopulerService = () => {
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
        <div>
           
            <div>
                <DynamicTitle title={'kisumisu'} subtitle={'klrjglsjfdgkjfhsdgkhf'}></DynamicTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.slice(0, 6).map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>

            <Link to={'/allservices'} className='flex items-center justify-center'>
                <button className='btn btn-accent '>show All services</button>
            </Link>
        </div>
    );
};

export default PopulerService;