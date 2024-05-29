import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DesertRecipeDetails from './DesertRecipeDetails';

const DesertRecipe = () => {
    const dessertdata = useLoaderData()
    return (
        <div>
            <h1 className='text-center italic text-rose-600 mt-10 text-xl'>Items that is made using Dessert</h1>
            <h1 className='text-center text-6xl font-extrabold mt-4'>Dessert Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 mx-0 md:mx-20 gap-5 '>
                {
                    dessertdata.map(data => <DesertRecipeDetails key = {data.id} data = {data}></DesertRecipeDetails>)
                }
            </div>
        </div>
    );
};

export default DesertRecipe;