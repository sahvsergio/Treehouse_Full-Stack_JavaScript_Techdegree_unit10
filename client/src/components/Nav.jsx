import React from 'react';
import {NavLink}from "react-router-dom";
import { useContext } from 'react';

import UserContext from '../context/UserContext';

const Nav=()=>{
    const {user}=useContext(UserContext)
    return(
  
    <nav>
            <ul className="header--signedout">
        {
               
            user?(<>                <li><a href="sign-up.html">Sign Up</a></li>
        <li><a href="sign-in.html">Sign In</a></li>):
                    </>):(
                        <><li><a href="sign-up.html">Sign Up</a></li>
<li><a href="sign-in.html">Sign In</a></li>
                        </>
                    )

        }
</ul>
    
</nav>
    
    )}

export default Nav