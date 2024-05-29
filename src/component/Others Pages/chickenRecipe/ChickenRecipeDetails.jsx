import React from 'react';

const ChickenRecipeDetails = ({data}) => {
    const {name,photo,description} =  data
    return (
        <div>
            <div style={{height : "550px"}} className='border p-3 mt-7 rounded-2xl shadow-2xl'>
                <img className='h-80 rounded' src={photo} alt="" />
                <h1 className='mt-3 text-2xl font-extrabold'>Name : {name}</h1>
                <h1 className='text-lg'>Description : {description}</h1>
            </div>
        </div>
    );
};

export default ChickenRecipeDetails;