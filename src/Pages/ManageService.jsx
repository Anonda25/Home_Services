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
    const handlerDelete=(id)=>{
        console.log(id); 
        setMypost((mypost) => mypost.filter((post) => post._id !== id))
    }
    return (
        <div>
            ManageService =({mypost.length})
            <div className='grid grid-cols-1   lg:grid-cols-2 gap-5 '>
                {
                    mypost.map(post => <MyPostCard key={post._id} post={post} handlerDeletes={handlerDelete}></MyPostCard>)
                }
            </div>

        </div>
    );
};

export default ManageService;