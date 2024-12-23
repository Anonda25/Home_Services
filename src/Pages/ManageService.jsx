import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyPostCard from '../CommenPage/MyPostCard';
import UserAxiosSecure from '../AuthProvider/UserAxiosSecure';
import DynamicTitle from '../CommenPage/DynamicTitle';

const ManageService = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure =UserAxiosSecure()
    console.log(user?.email);
    const [mypost, setMypost] = useState([]);

    // console.log('this is my ',mypost);
    useEffect(()=>{
        fecththeEamil()
    },[user])

    const fecththeEamil= async()=>{
        const { data } = await axiosSecure.get(`/services/email/${user?.email}`)
        setMypost(data)
        
    }
    const handlerDelete=(id)=>{
        console.log(id); 
        setMypost((mypost) => mypost.filter((post) => post._id !== id))
    }
    return (
        <div>
            ManageService =({mypost.length})
            <div>
                <DynamicTitle title={'my posted card '} subtitle={'there is a post of my all work'}>

                </DynamicTitle>
            </div>
            <div className='grid grid-cols-1   lg:grid-cols-2 gap-5 '>
                {
                    mypost.map(post => <MyPostCard key={post._id} post={post} handlerDeletes={handlerDelete}></MyPostCard>)
                }
            </div>

        </div>
    );
};

export default ManageService;