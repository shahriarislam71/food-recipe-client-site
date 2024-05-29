import React from 'react';
import './RecipeCatagory.css'
import { Link } from 'react-router-dom';

const RecipeCatagories = () => {
    return (
        <div>
            <p className='text-center italic mt-24 text-rose-600'>Choose a Category</p>
            <h1 className='text-center font-extrabold text-6xl'>Recipe Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 mx-0 md:mx-20 mt-10 gap-y-10'>
                <div className='text-center mx-auto '>
                    <img className='rounded-full h-52 w-52 border imageRotation '  src="../../../../public/vegetables image.avif" alt="" />
                    {/* <h1 >vegetables</h1> */}
                    <Link  to={'/vegetables'}> <span className='text-xl font-semibold mt-20'>vegetables</span> </Link>
                </div>
                <div className='text-center mx-auto '>
                    <img className='rounded-full h-52 w-52 border imageRotation' src="../../../../public/beefimage.jpg" alt="" />
                    <Link className='text-xl font-semibold mt-5' to={'/beef'}>Beef</Link>
                    {/* <h1 className='text-xl font-semibold mt-5'>Beef</h1> */}
                </div>
                <div className='text-center mx-auto '>
                    <img className='rounded-full h-52 w-52 border imageRotation' src="../../../../public/chicken image].jpg" alt="" />
                    <Link className='text-xl font-semibold mt-5' to={'/chicken'}>Chicken</Link>
                    {/* <h1 className='text-xl font-semibold mt-5'>Chicken</h1> */}
                </div>
                <div className='text-center mx-auto '>
                    <img className='rounded-full h-52 w-52 border imageRotation' src="../../../../public/desert image.jpg" alt="" />
                    <Link className='text-xl font-semibold mt-5' to={'/dessert'}>Dessert</Link>
                    {/* <h1 className='text-xl font-semibold mt-5'>Dessert</h1> */}
                </div>
            </div>
        </div>
    );
};

export default RecipeCatagories;