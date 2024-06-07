import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Authcontext } from '../../../context/AuthProvider';
// import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../config/firebase.config';
import { GithubAuthProvider } from "firebase/auth";

// import { Authcontext } from '../../../context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, getShoppingCart} = useContext(Authcontext)
    const navigate = useNavigate()
    const location = useLocation()

    const form = location.state?.from?.pathname || '/'

    // sign in with google 
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)
    const handleSignInWIthGoogle = () =>{
        signInWithPopup(auth, provider)
        .then((result)=>{
            const user = result.user
            let list = []
            const listData = getShoppingCart()
            console.log(user.displayName)
            list.push(user.displayName)
            list.push(user.email)
            list.push('')
            list.push(user.photoURL)
            listData.push(list)
            localStorage.setItem('shopping-cart',JSON.stringify(listData))
            console.log(user)
            navigate(form)
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    // sign In with github 
    const githubprovider = new GithubAuthProvider();
    
    const handleSignInWithGithub = () =>{
        signInWithPopup(auth, githubprovider)
        .then((result)=>{
            const user = result.user
            let list = []
            const listData = getShoppingCart()
            console.log(user.displayName)
            list.push(user.displayName)
            list.push(user.email)
            list.push('')
            list.push(user.photoURL)
            listData.push(list)
            localStorage.setItem('shopping-cart',JSON.stringify(listData))
            console.log(user)
            navigate(form)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const handleSignIn = (event) => {
        event.preventDefault()
        const emailValue = event.target.email.value
        const passwordValue = event.target.password.value

        signIn(emailValue, passwordValue)
            .then((credentials) => {
                const credential = credentials.user
                event.target.reset()
                navigate(form)
                setError('')
            })
            .catch((error) => {
                setError(error)
            })
    }

    return (
        <div>

            <form onSubmit={handleSignIn}>
                <div className='form py-20 px-1 md:px-96'>
                    <div className='bg-white rounded-lg'>
                        <h1 className='text-center pt-10 text-5xl font-extrabold pb-6'>Login</h1>
                        <div className='px-1 md:px-10'>
                            <label className='text-xl font-bold text-slate-600' htmlFor="emailLabel">Email Address</label>
                            <input className='emailField' type="email" name="email" id="emailLabel" placeholder='Enter Your Email' required />
                        </div>
                        <div className='px-1 md:px-10 mt-3'>
                            <label className='text-xl font-bold text-slate-600' htmlFor="passwordLabel">Password</label>
                            <input className='emailField' type="password" name="password" id="passwordLabel" placeholder='Enter password' required />
                        </div>
                        {error ? <p className='md:px-10 px-1 text-red-600'>Invalid email/password</p> : ''}
                        <input className='mt-5 px-5 md:px-10 py-3 rounded-lg block mx-auto button text-white cursor-pointer' type="submit" value="Login" />

                        <div className='flex gap-3 mt-10 mb-10 items-center'>
                            <hr className='ms-1 md:ms-10 w-56' />
                            <h1 className='text-center text-xl font-extrabold'>Login With Others </h1>
                            <hr className='w-56' />
                        </div>
                        <div onClick={handleSignInWIthGoogle} className='flex gap-3 items-center border-2 border-black mx-1 md:mx-40 md:px-32 px-3 py-3 rounded-lg mb-3 cursor-pointer othersLogin'>
                            <FontAwesomeIcon icon={faGoogle} />
                            <h1>Login With Google</h1>
                        </div>
                        <div onClick={handleSignInWithGithub} className='flex gap-3 items-center border-2 border-black mx-1 md:mx-40 md:px-32 px-3 py-3 rounded-lg cursor-pointer othersLogin'>
                            <FontAwesomeIcon icon={faGithub} />
                            <h1>Login with Github</h1>
                        </div>
                        <div className='mt-10 text-center'>
                            <h1 className='mb-2 text-slate-400'>Didn't sign up yet? Please Sign up first</h1>
                            <Link to={'/register'}><button className='text-bold text-slate-600 pb-8 font-bold hover:text-2xl'>SIGN UP</button></Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;