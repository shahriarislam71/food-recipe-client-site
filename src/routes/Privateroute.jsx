import React, { useContext } from 'react';
import { Authcontext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const { users, loading } = useContext(Authcontext)
    const location = useLocation()
    console.log(location)
    if (loading) {
        return <button type="button" className="bg-indigo-500 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

            </svg>
            Processing...
        </button>
    }
    if(users){
        return children
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default Privateroute;