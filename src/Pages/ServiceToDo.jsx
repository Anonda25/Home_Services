import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Noservices from '../assets/service-Un.jpg'
import UserAxiosSecure from '../AuthProvider/UserAxiosSecure';
import DynamicTitle from '../CommenPage/DynamicTitle';
const ServiceToDo = () => {
    const axiosSecure = UserAxiosSecure()
    const [services, setServices] = useState([]);
    const { user } = useContext(AuthContext)
    const userEmail = user?.email;
    console.log(services);
    useEffect(() => {
        fetchServices();

    }, [user]);

    const fetchServices = async () => {

        const { data } = await axiosSecure.get(`/serviceStatus/${userEmail}?buyer=true`)
        setServices(data)

    };

    const updateServiceStatus = async (serviceId, newStatus) => {
        //updating the servicesStatus frist
        setServices(prevServices =>
            prevServices.map(service =>
                service._id === serviceId ? { ...service, serviceStatus: newStatus } : service
            )
        );

        try {
            await axiosSecure.put(`/serviceStatus/${serviceId}`, {
                serviceStatus: newStatus,
            });
            setServices(prevServices =>
                prevServices.map(service =>
                    service.id === serviceId ? { ...service, serviceStatus: newStatus } : service
                )
            );
        } catch (err) {
            console.error('Error updating service status:', err);

        }
    };

    return (
        <div className="container mx-auto p-4">
            <div>
                <DynamicTitle title={" my To Do Services"}></DynamicTitle>
            </div>
            {services.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>price</th>
                                <th>serviceStatus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                services.map(service => <tr key={service._id}>
                                    <td>
                                        <img src={service?.photo} alt="" className='w-10 h-10 rounded-full object-cover' />
                                    </td>
                                    <td>
                                        <div className="font-bold">{service.name}</div>
                                    </td>
                                    <td>
                                        {service.email}
                                    </td>
                                    <td>
                                        $ {service.price}
                                    </td>
                                    <td>
                                        <select
                                            className="mt-2 border p-2 rounded"
                                            value={service.serviceStatus}
                                            onChange={e => updateServiceStatus(service._id, e.target.value)}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="working">Working</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </td>
                                    {/* <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th> */}
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>

            ) : (
                <div className="text-gray-500 text-center mt-8">
                    <p className='text-2xl font-bold'>You have no services to manage currently.</p>
                    <img src={Noservices} alt="" className='mx-auto' />
                </div>
            )}
        </div>
    );
};

export default ServiceToDo;

