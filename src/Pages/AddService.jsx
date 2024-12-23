import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import addingLogo from '../assets/adding.webp'
import UserAxiosSecure from '../AuthProvider/UserAxiosSecure';

const AddService = () => {
    const axiosSecure = UserAxiosSecure()
    const { user } = useContext(AuthContext)
    const handlerAddService = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const area = form.area.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const service = {
            name,
            buyer: {
                email: user.email,
                name: user.displayName,
                photo: user.photoURL
            },

            price,
            area,
            photo,
            description
        };
        
        const { data } = await axiosSecure.post(`/services`, service)
        console.log(data);

    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
                <img src={addingLogo} alt="" />
            </div>
            <div className="flex-1">
                <form onSubmit={handlerAddService} className="card-body">
                    {/* Add Service Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Service Name"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="flex gap-3">
                        {/* Add Price */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Add Service Area */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Service Area</span>
                            </label>
                            <input
                                type="text"
                                name="area"
                                placeholder="Service Area"
                                className="input input-bordered"
                                required
                            />
                        </div>
                    </div>

                    {/* Add Image URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input
                            type="url"
                            name="photo"
                            placeholder="Image URL"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Add Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            placeholder="Description"
                            name="description"
                            className="textarea textarea-bordered textarea-md w-full"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Add Service
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;
