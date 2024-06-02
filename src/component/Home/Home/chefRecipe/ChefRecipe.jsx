import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefRecipeDetails from './ChefRecipeDetails';

const ChefRecipe = () => {
    const chefRecipeData = useLoaderData()
    console.log(chefRecipeData)
    const {  name, photo, chef_info, number_of_recipes, years_of_experience, likes, recipes } = chefRecipeData
    console.log(recipes)
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
            <div>
                <p className='text-center mt-40 mb-10 text-6xl font-extrabold textdecoration'>{name}'s Recipes</p>
                <div className='grid grid-cols-3 mx-20 gap-5'>
                    {
                        recipes.map(data =><ChefRecipeDetails key={data.idd} data = {data}></ChefRecipeDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;