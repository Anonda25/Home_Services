import React from 'react';

const MyPostCard = ({post}) => {
    console.log(post);
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={post.photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MyPostCard;