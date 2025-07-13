import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import {Navigate} from "react-router-dom";

const UserSignOut=()=>{
    // get tue user context and the sign out function 
    const { actions }=useContext(UserContext);
    useEffect(()=>actions.signOut());
    //navigate to home 
    return <Navigate to='/'replace />
}

export default UserSignOut;