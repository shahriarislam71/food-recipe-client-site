import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../config/firebase.config';

export const Authcontext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [users, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const getShoppingCart = () => {
        let shoppingCart = [];
    
        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }
        return shoppingCart;
    }

    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    
    

    const authInfo = {
        createUser,
        signIn,
        loading,
        users,
        getShoppingCart,
        logout
    }

    return (
        <Authcontext.Provider value = {authInfo}>
            {children}
        </Authcontext.Provider >
    );
};

export default AuthProvider;