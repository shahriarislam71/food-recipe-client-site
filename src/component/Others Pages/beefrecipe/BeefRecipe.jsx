import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BeefRecipeDetails from './BeefRecipeDetails';

const BeefRecipe = () => {
    const beefdata = useLoaderData()
    return (
        <div>
            <h1 className='text-center italic text-rose-600 mt-10 text-xl'>Items that is made using Beef</h1>
            <h1 className='text-center text-6xl font-extrabold mt-4'>Beef Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 mx-0 md:mx-20 gap-5 '>
                {
                    beefdata.map(data => <BeefRecipeDetails key={data.id} data = {data}></BeefRecipeDetails>)
                }
            </div>
        </div>
    );
};

export default BeefRecipe;