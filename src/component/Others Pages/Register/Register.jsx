import React, { useContext, useState } from 'react';
import './Register.css'
import { Authcontext } from '../../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const [emailerror,setemailError] = useState('')
    const [passworderror,setpasswordError] = useState('')
    const {createUser,getShoppingCart} = useContext(Authcontext)
    const navigate = useNavigate()
    const location = useLocation()
    const form = location.state?.from?.pathname || '/login'
    const handleSubmit =(event)=>{
        event.preventDefault()
        const namevalue = event.target.name.value
        const emailvalue = event.target.email.value
        const passwordvalue = event.target.password.value
        const photourl = event.target.photo.value
        console.log(namevalue)
        console.log(emailvalue)
        console.log(passwordvalue)
        console.log(photourl)
        

        createUser(emailvalue,passwordvalue)
        .then((userCredntial)=>{
            
            const credential = userCredntial.user
            navigate(form)
            let list = []
            const data = getShoppingCart()
            list.push(namevalue)
            list.push(emailvalue)
            list.push(passwordvalue)
            list.push(photourl)
            data.push(list)
            localStorage.setItem('shopping-cart',JSON.stringify(data))
        })
        .catch((error)=>{
            console.log(error)
            if (passwordvalue.length<6){
                setpasswordError('Password should be at least 6 characters ')
                
            }
            else{
                setemailError('Email already exist! Please try with another one..')
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form py-20 px-1 md:px-96'>
                    <div className='bg-white rounded-lg'>
                        <h1 className='text-center pt-10 text-5xl font-extrabold pb-6'>Register</h1>
                        <div className='px-1 md:px-10'>
                            <label className='text-xl font-bold text-slate-600' htmlFor="nameLabel">Name</label>
                            <input className='emailField' type="text" name="name" id="nameLabel" placeholder='Enter Your name' required />
                        </div>
                        <div className='px-1 md:px-10'>
                            <label className='text-xl font-bold text-slate-600' htmlFor="emailLabel">Email Address</label>
                            <input className='emailField' type="email" name="email" id="emailLabel" placeholder='Enter Your Email' required />
                            
                        </div>
                        {emailerror?<p className='md:px-10 px-1 text-red-600'>{emailerror}</p>:""}
                        <div className='px-1 md:px-10 mt-3'>
                            <label className='text-xl font-bold text-slate-600' htmlFor="passwordLabel">Password</label>
                            <input className='emailField' type="password" name="password" id="passwordLabel" placeholder='Enter password' required />
                        </div>
                        {passworderror?<p className='md:px-10 px-1 text-red-600'>{passworderror}</p>:""}
                        <div className='px-1 md:px-10 mt-3'>
                            <label className='text-xl font-bold text-slate-600' htmlFor="photoLabel">Photo Url</label>
                            <input className='emailField' type="url" name="photo" id="photoLabel" placeholder='Enter photo url' required/>
                        </div>
                        
                        <input className='mt-5 px-5 md:px-10 py-3 rounded-lg block mx-auto button text-white' type="submit" value="Register" />
                        <br />
                        
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;