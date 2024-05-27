import React, { useState } from 'react';
import './Nav.css'
import Header from '../component/Home/Header/Header';



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
            <div className='p-2 md:p-7 bg-slate-300'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <img className='h-10' src="../../public/foodIcon.png" alt="" />
                        <h2 className='text-rose-600 font-extrabold text-2xl'>Nokshi Polli</h2>
                    </div>
                    <div className='flex gap-5'>
                        <h1 className='text-xl font-bold'>Home</h1>
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