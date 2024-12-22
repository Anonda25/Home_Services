import axios from 'axios';
import React, { useState, useEffect } from 'react';

const BookedServices = () => {
    const [services, setservise] = useState([])
    useEffect(() => {
        fatchAllService()
    }, [])

    console.log(services);
    const fatchAllService = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/serviceStatus`)
        setservise(data);
    }
    return (
        <div>
            BookedServices{services.length}
          
        </div>
    );
};

export default BookedServices;