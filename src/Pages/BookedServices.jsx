import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import UserAxiosSecure from '../AuthProvider/UserAxiosSecure';
import DynamicTitle from '../CommenPage/DynamicTitle';
const BookedServices = () => {
    const axiosSecure =UserAxiosSecure()
    const [services, setservise] = useState([])
    const { user } = useContext(AuthContext)
    const userEmail = user?.email;
    useEffect(() => {
        fatchAllService()
    }, [user])

    console.log(services);
    const fatchAllService = async () => {
        const { data } = await axiosSecure.get(`/serviceStatus/${userEmail}`)
        setservise(data);

    }
    return (
        <div className="container mx-auto p-4">
            
            <div>
                <DynamicTitle title={"My Booked Services"} ></DynamicTitle>
            </div>
            {services.length > 0 ? (
                <div>
                    <div className="overflow-x-auto rounded-md">
                        <table className="table ">
                            {/* head */}
                            <thead className='bg-[#dcc4ea]  text-black'>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Email</th>
                                    <th>ServiceStatus</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    services.map((service,ind) => <tr key={service._id}>
                                        <td className="font-bold"> {ind + 1}</td>
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