import React from 'react';
import {NavLink}from "react-router-dom";

const Nav=()=>{
    return <nav>
    <ul class="header--signedout">
        <li><a href="sign-up.html">Sign Up</a></li>
        <li><a href="sign-in.html">Sign In</a></li>
    </ul>
</nav>
}

export default Nav