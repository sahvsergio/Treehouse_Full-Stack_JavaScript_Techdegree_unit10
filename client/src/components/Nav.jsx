import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../context/UserContext";

const Nav = () => {
    const { authUser } = useContext(UserContext);
    return (
        <nav>
            <ul className="header--signedout">
                {authUser ? (
                    <>
                        <li>Welcome, {authUser.firstName} {authUser.lastName}!</li>
                        <li><NavLink to="/signout">Sign Out</NavLink></li>
                    </>
                ) : (
                    <>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                        <li><NavLink to="/signin">Sign In</NavLink></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Nav;