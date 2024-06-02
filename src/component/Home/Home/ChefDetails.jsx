import React from 'react';
import './ChefDetails.css'
import { Link } from 'react-router-dom';

const ChefDetails = ({ data }) => {
    const { id, name, photo, years_of_experience, number_of_recipes, likes } = data
    console.log(id)
    return (
        <div>
            <div style={{height:'554px'}} className='border rounded-md p-3 shadow-2xl'>
                <img className='object-fill w-full h-80 rounded' src={photo} alt="" />
                <h1 className='text-xl font-bold mt-3'>Name : {name}</h1>
                <h1 className='texl-lg font-semibold mt-3'>Years of experience : {years_of_experience}</h1>
                <h1 className='texl-lg font-semibold mt-3'>Numbers of recipes : {number_of_recipes}</h1>
                <h1 className='texl-lg font-semibold mt-3'>Likes :  {likes} TK</h1>
                <Link to={`/chefdata/${id}`}><button className='bg-rose-600 py-4 mt-3 rounded w-full text-lg '>View Recipes</button></Link>
            </div>
        </div>
    );
};

export default ChefDetails;