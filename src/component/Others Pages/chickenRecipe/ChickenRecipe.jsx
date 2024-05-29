import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChickenRecipeDetails from './ChickenRecipeDetails';

const ChickenRecipe = () => {
    const beefData = useLoaderData()
    return (
        <div>
            <h1 className='text-center italic text-rose-600 mt-10 text-xl'>Items that is made using Beef</h1>
            <h1 className='text-center text-6xl font-extrabold mt-4'>Chicken Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 mx-0 md:mx-20 gap-5 '>
                {
                    beefData.map(data => <ChickenRecipeDetails key = {data.id} data = {data}></ChickenRecipeDetails>)
                }
            </div>
        </div>
    );
};

export default ChickenRecipe;