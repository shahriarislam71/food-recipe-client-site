import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VegetableDetails from './VegetableDetails/VegetableDetails';

const VegetablesRecipe = () => {
    const vegetablesdata = useLoaderData()
    // console.log(vegetablesdata)
    return (
        <div>
            <h1 className='text-center italic text-rose-600 mt-10 text-xl'>Items that is made using Vegetables</h1>
            <h1 className='text-center text-6xl font-extrabold mt-4'>Vegetables Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 mx-0 md:mx-20 gap-5 '>
                {
                    vegetablesdata.map(data => <VegetableDetails key={data.id} data={data}></VegetableDetails>)
                }
            </div>
        </div>
    );
};

export default VegetablesRecipe;