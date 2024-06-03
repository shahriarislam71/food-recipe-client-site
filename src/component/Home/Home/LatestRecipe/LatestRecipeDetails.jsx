import React from 'react';

const LatestRecipeDetails = ({data}) => {
    const {photo,name,description,rating} = data
    // console.log(data)
    return (
        <div>
            <div className='border rounded-lg  shadow-2xl shadow-slate-700'>
                <img className='h-80 rounded-lg w-full' src={photo} alt="" />
                <p className='mt-5 text-lg font-bold px-3 textdecoration'>Name : {name}</p>
                <p className='mt-3 text-base font-semibold px-3 textdecoration'>Ratings : {rating}</p>
                <p className='mt-3 text-base font-semibold px-3 textdecoration mb-10'>Description : {description}</p>

            </div>
        </div>
    );
};

export default LatestRecipeDetails;