import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyPostCard from '../CommenPage/MyPostCard';

const ManageService = () => {
    const {user}=useContext(AuthContext)
    console.log(user?.email);
    const [mypost, setMypost] = useState([]);

    // console.log('this is my ',mypost);
    useEffect(()=>{
        fecththeEamil()
    },[user])

    const fecththeEamil= async()=>{
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/services/email/${user?.email}`)
        setMypost(data)
        
    }
    return (
        <div>
            ManageService =({mypost.length})
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    mypost.map(post => <MyPostCard key={post._id} post={post}></MyPostCard>)
                }
            </div>

        </div>
    );
};

export default ManageService;