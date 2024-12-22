import axios from 'axios';
import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyPostCard = ({ post, handlerDeletes }) => {
    console.log(post);
    const { _id, photo, name, price, description, buyer } = post


    const handlerDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                try {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/services/${id}`)
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        // Notify parent component to remove the card
                        handlerDeletes(id);
                    } else {
                        console.error('Failed to delete the post');
                    }
                }
                catch (err) {
                    console.log(err);
                }
            }
        });


        console.log(id);

    }

    

    return (
        <div className='flex flex-col md:flex-row gap-6 border shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 '>
            <div className=''>
                <img src={photo} alt="" className='w-full md:w-48 h-64 object-cover rounded-lg ' />
            </div>
            <div className='flex flex-col justify-between flex-grow'>
                <div className="space-y-2">

                    <p> <span className='text-2xl font-serif'>Services Name</span>: {name}</p>
                    <p> <span className='text-2xl font-serif'>Price</span> :{price}</p>
                    <p> <span className='text-2xl font-serif'>Description</span> Description:{description}</p>
                </div>
                <div className='flex gap-5'>
                    <button className='btn rounded-full  hover:bg-pink-400 hover:text-white' onClick={() => handlerDelete(_id)}><RiDeleteBin2Line /></button>
                    <Link to={`/update/${_id}`} state={{ post }}> 
                        <button className='btn rounded-full  hover:bg-pink-400 hover:text-white'><CiEdit /></button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default MyPostCard;
