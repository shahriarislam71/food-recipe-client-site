import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {
    const chefRecipeData = useLoaderData()
    const { name, photo, chef_info, number_of_recipes, years_of_experience, likes } = chefRecipeData
    console.log(likes)
    return (
        <div>
            {/* banner */}
            <div className='flex mx-20 mt-10 gap-5 items-center'>
                <div>
                    <img style={{height : '550px'}} className='rounded' src={photo} alt="" />
                </div>
                <div className=''>
                    <p className='text-xl font-bold'>Name : {name}</p>
                    <p className='texl-lg font-semibold'>Description : {chef_info}</p>
                    <p className='texl-md font-semibold'>Number of the Recipe : {number_of_recipes}</p>
                    <p className='texl-md font-semibold'>Years of experience : {years_of_experience}</p>
                    <p className='texl-md font-semibold'>Likes : {likes}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;