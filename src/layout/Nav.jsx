import React, { useState } from 'react';
import './Nav.css'
import Header from '../component/Home/Header/Header';
import { Link } from 'react-router-dom';



const Nav = () => {
    const [state, setstate] = useState(true)

    const handleState = () => {
        if (state) {
            setstate(false)
        }
        else {
            setstate(true)
        }
    }
    return (
        <div className='container'>
            <div  className='p-0 md:p-7 px-0 md:px-20 bg-slate-50'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <img className='h-10' src="../../public/foodIcon.png" alt="" />
                        <h2 className='text-rose-600 font-extrabold text-2xl font-mono italic oldstyle-nums'>Nokshi Polli</h2>
                    </div>
                    <div className='flex gap-5'>
                        <Link className='text-xl font-bold' to={'/'}>Home</Link>
                        {/* <h1 >Home</h1> */}
                        <h1 className='text-xl font-bold'>Blog</h1>
                    </div>
                    <div>
                        <img onClick={handleState} className='h-10 relative inline-block' src="../../public/foodIcon.png" alt="" />
                    </div>

                    {state ?
                        (<div className='stateTrue'>
                            <h1 className='bg-slate-300'>hi I am rafi</h1>
                        </div>) : (<div className='statefalse right-5'>
                            <h1 className='bg-white text-center p-2'>Logout</h1>
                        </div>)
                    }

                </div>

            </div>
            

            {/* <Header></Header> */}
        </div>
    );
};

export default Nav;