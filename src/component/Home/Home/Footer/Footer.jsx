import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-4 px-20 mt-32 py-20 gap-5  bg-black text-white'>
                <div>
                    <div className='flex gap-5 items-center'>
                        <img className='h-10 w-10 rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/000/665/392/small/810_R0lVIEFORyA0ODctMjk.jpg" alt="" />
                        <p className='text-2xl font-extrabold'>Nokshi Polli</p>
                    </div>
                    <p className='mt-4 text-md'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam velit laudantium eaque, rerum quas labore quam eum assumenda amet esse? Pariatur distinctio aut laborum enim accusamus eos, sapiente similique dolorum!</p>
                </div>
                <div className='block mx-auto'>
                    <h1 className='text-2xl font-extrabold'>Categories</h1>
                    <div className='mt-3'>
                        <Link to={'/vegetables'}><div className='flex gap-3 hover:text-rose-600 mb-2'>
                            <ArrowUpRightIcon className="size-6 text-blue-500" />
                            <p>Vegetables</p>
                        </div></Link>
                        <Link to={'/beef'}><div className='flex gap-3 hover:text-rose-600 mb-2'>
                            <ArrowUpRightIcon className="size-6 text-blue-500" />
                            <p>Beef</p>
                        </div></Link>
                        <Link to={'/chicken'}><div className='flex gap-3 hover:text-rose-600 mb-2'>
                            <ArrowUpRightIcon className="size-6 text-blue-500" />
                            <p>Chicken</p>
                        </div></Link>
                        <Link to={'/dessert'}><div className='flex gap-3 hover:text-rose-600'>
                            <ArrowUpRightIcon className="size-6 text-blue-500" />
                            <p>Dessert</p>
                        </div></Link>
                    </div>
                </div>
                <div className='block mx-auto'>
                    <h1 className='text-2xl font-extrabold'>Latest Recipe</h1>
                    <div className='mt-3'>
                        <div className='flex gap-3 mb-2'>
                            <ArrowUpRightIcon className="size-6 text-blue-500" />
                            <p> Chingri Malai Curry</p>
                        </div>
                        <div className='flex gap-3 mb-2'>
                            <ArrowUpRightIcon className="size-6 text-blue-500" />
                            <p> Ilish Bhapa</p>
                        </div>
                        <div className='flex gap-3 mb-2'>
                            <ArrowUpRightIcon className="size-6 text-blue-500" />
                            <p> Mutton Rezala</p>
                        </div>
                        <div className='flex gap-3 mb-2'>
                            <ArrowUpRightIcon className="size-6 text-blue-500" />
                            <p> Doi Begun</p>
                        </div>
                        <div className='flex gap-3 mb-2'>
                            <ArrowUpRightIcon className="size-6 text-blue-500" />
                            <p> Shorshe Bata Ilish</p>
                        </div>
                        <div className='flex gap-3 '>
                            <ArrowUpRightIcon className="size-6 text-blue-500" />
                            <p> Lau Chingri</p>
                        </div>
                    </div>
                </div>
                <div className='block mx-auto'>
                    <h1 className='text-2xl font-extrabold mb-3'>Get in connect</h1>
                    <p className='text-lg'>Follow Us</p>
                    <div className='flex mt-3 gap-3'>
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <button className='bg-rose-600 rounded-lg mt-3 px-8 py-5'>Contact Us</button>
                </div>
            </div>
        </>
    );
};

export default Footer;