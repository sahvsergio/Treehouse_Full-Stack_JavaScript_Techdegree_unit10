import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../context/UserContext";

const Nav = () => {
    // bring the context to the file 
    const { authUser } = useContext(UserContext);
    return (
        <nav>
            <ul className="header--signedout">
                {/* Create a dynamic  nav bar with different links based on 
                whether user is signed in or not
                 */} 
                {authUser ? (
                    <>
                        {/* Display full name and sign out if user is authenticated */} 
                        <li>Welcome, {authUser.firstName} {authUser.lastName}!</li>
                        <li><NavLink to="/signout">Sign Out</NavLink></li>
                    </>
                ) : (
                    
                    <>
                            {/* Else display Sign Up and Signin links*/} 
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                        <li><NavLink to="/signin">Sign In</NavLink></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Nav;