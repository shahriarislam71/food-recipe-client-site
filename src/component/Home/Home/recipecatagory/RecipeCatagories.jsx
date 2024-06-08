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
                    <Link to={'/vegetables'}><img className='rounded-full h-52 w-52 border imageRotation '  src="https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=aBFGUU-98pnoht73co8r2TZIKF3MDtBBu9KSxtxK_C0=" alt="" /></Link>
                    {/* <h1 >vegetables</h1> */}
                    <Link  to={'/vegetables'}> <span className='text-xl font-semibold mt-20'>vegetables</span> </Link>
                </div>
                <div className='text-center mx-auto '>
                    <Link to={'/beef'}><img className='rounded-full h-52 w-52 border imageRotation' src="https://www.shutterstock.com/image-photo/raw-beef-steak-rosemary-peppercorns-600nw-2292399653.jpg" alt="" /></Link>
                    <Link className='text-xl font-semibold mt-5' to={'/beef'}>Beef</Link>
                    {/* <h1 className='text-xl font-semibold mt-5'>Beef</h1> */}
                </div>
                <div className='text-center mx-auto '>
                    <Link to={'/chicken'}><img className='rounded-full h-52 w-52 border imageRotation' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4TGPeL83Om3yqLK4Mq_CvvkCz86gdpqhWQ&s" alt="" /></Link>
                    <Link className='text-xl font-semibold mt-5' to={'/chicken'}>Chicken</Link>
                    {/* <h1 className='text-xl font-semibold mt-5'>Chicken</h1> */}
                </div>
                <div className='text-center mx-auto '>
                    <Link to={'/dessert'}><img className='rounded-full h-52 w-52 border imageRotation' src="https://t3.ftcdn.net/jpg/01/76/33/14/360_F_176331484_nLHY9EoW0ETwPZaS9OBXPGbCJhT70GZe.jpg" alt="" /></Link>
                    <Link className='text-xl font-semibold mt-5' to={'/dessert'}>Dessert</Link>
                    {/* <h1 className='text-xl font-semibold mt-5'>Dessert</h1> */}
                </div>
            </div>
        </div>
    );
};

export default RecipeCatagories;