import React, { useContext, useState } from 'react';
import './Nav.css'
import Header from '../component/Home/Header/Header';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../context/AuthProvider';



const Nav = () => {
    const { users, getShoppingCart, logout } = useContext(Authcontext)
    console.log(users?.email)
    const [state, setstate] = useState(true)
    const getData = getShoppingCart()
    let photo = ''
    if (users) {
        const userdata = getData.find(myfunction)
        console.log(userdata)
        photo = (userdata[3])
    }
    // console.log(photo)
    function myfunction(data) {
        console.log(data[1])
        if (data[1] === users?.email) {
            return data
        }
    }

    // console.log(getData)
    const handleState = () => {
        if (state) {
            setstate(false)
        }
        else {
            setstate(true)
        }
    }
    const handleLogOut = () => {
        document.getElementById('logoutt').style.visibility = 'hidden'
        logout()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='container'>
            <div className='p-0 md:p-7 px-0 md:px-20 bg-slate-50'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <img className='h-10 w-10 rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/000/665/392/small/810_R0lVIEFORyA0ODctMjk.jpg" alt="" />
                        <h2 className='text-rose-600 font-extrabold text-2xl font-mono italic oldstyle-nums'>Nokshi Polli</h2>
                    </div>
                    <div className='flex gap-5'>
                        <div id='activee'>
                            <NavLink className={`text-xl font-bold `} to={'/'}>Home</NavLink>
                        </div>
                        {/* <h1 >Home</h1> */}
                        <div id="blog">
                            <NavLink to={'/blog'}><h1 className='text-xl font-bold'>Blog</h1></NavLink>
                        </div>
                    </div>
                    <div>
                        {
                            !users && (<Link to={'/login'}><button onClick={handleState} className='px-7 py-3 button rounded-lg text-white'>Login</button></Link>)
                        }
                        {
                            users && (<img title={users?.email} onClick={handleState} className={`cursor-pointer h-14 w-14 rounded-full relative inline-block`} src={`${photo}`} alt="" />)
                        }
                    </div>

                    {state ?
                        (<div className='stateTrue'>
                            <h1 className='bg-slate-300'>hi I am rafi</h1>
                        </div>) : (<div onClick={handleLogOut} className='statefalse right-5'>
                            <h1 id='logoutt' className='bg-purple-300 rounded text-center p-2 cursor-pointer'>Logout</h1>
                        </div>)
                    }

                </div>

            </div>


            {/* <Header></Header> */}
        </div>
    );
};

export default Nav;