import React from "react";
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import UserContext from "../context/UserContext";


const PrivateRoute= ()=>{
    {/* Check if authenticated user exists */ } 
    const {authUser}=useContext(UserContext);
    {/* Grab the destination url  */ } 
    const location=useLocation();
    {/* if user is authenticated */ } 
    if(authUser){
        {/* Grant access to original destination  */ } 
        return <Outlet/>

    }
    else{
        {/* redirect to sign in page  */ } 
        return <Navigate to ="/signin"state={{from:location.pathname}}/>
}
}

export default PrivateRoute;