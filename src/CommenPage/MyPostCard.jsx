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
        <div className='flex gap-10 border items-center p-4'>
            <div className='flex-1'>
                <img src={photo} alt="" />
            </div>
            <div className='flex-1'>
                <p>name:{name}</p>
                <p>name:{price}</p>
                <p>name:{description}</p>
                <div>
                    <button onClick={() => handlerDelete(_id)}><RiDeleteBin2Line /></button>
                    <Link to={`/update/${_id}`} state={{ post }}> 
                        <button><CiEdit /></button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default MyPostCard;

