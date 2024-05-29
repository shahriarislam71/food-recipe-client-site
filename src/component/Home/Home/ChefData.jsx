import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import ChefDetails from './ChefDetails';

const ChefData = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1 className='text-center mt-16 font-extrabold text-3xl text-rose-600'>Chef Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-0 md:mx-20 mt-10 gap-5	'>
                {
                    data.map(chefdata => <ChefDetails key={chefdata.id} data={chefdata}></ChefDetails>)
                }
            </div>
        </div>
    );
};

export default ChefData;