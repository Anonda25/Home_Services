import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
const BookedServices = () => {
    const [services, setservise] = useState([])
    const { user } = useContext(AuthContext)
    const userEmail = user?.email;
    useEffect(() => {
        fatchAllService()
    }, [user])

    console.log(services);
    const fatchAllService = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/serviceStatus/${userEmail}`)
        const userServices = data.filter(service => service.email === userEmail);
        setservise(userServices);
        
    }
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">My Booked Services</h2>
            {services.length > 0 ? (
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>email</th>
                                    <th>serviceStatus</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                {
                                    services.map(service => <tr key={service._id}>

                                        <td>
                                            <div className="flex items-center gap-3">
                                               
                                                <div>
                                                    <div className="font-bold">{service?.name}</div>
                                                    
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {service.serviceDate}
                                        </td>
                                        <td>
                                           $ {service.price}
                                        </td>
                                        <td>
                                            {service?.buyer}
                                        </td>
                                        <td>{service.serviceStatus}</td>
                                        
                                        
                                    </tr>)
                                }
                                
                            </tbody>
                            
                        </table>
                    </div>
                </div>
               
            ) : (
                <div className="text-gray-500 text-center mt-8">
                        <p> You haven't booked any services yet. Browse our services to get started!</p>
                        <Link to={'/allservices'}>
                        <button className='btn'>all Services</button>
                        </Link>
                </div>
            )}
        </div>
    );
};

export default BookedServices;