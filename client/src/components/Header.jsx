import React from 'react'





const Header=()=>{
    return (
    <>
           
            <header>
                <div className="wrap header--flex" >
                    <h1 className="header--logo">  Courses
                    </h1>
                    <nav>
                        <ul class="header--signedout">
                            <li><a href="sign-up.html">Sign Up</a></li>
                            <li><a href="sign-in.html">Sign In</a></li>
                        </ul>
                    </nav>

              
                 </div>




            </header>
    
    </>

)}
{/*
    Setting inital states for pictures and query variables
    and their setting functions

<header>
    <div class="wrap header--flex">
        <h1 class="header--logo"><a href="index.html">Courses</a></h1>
        <nav>
            <ul class="header--signedout">
                <li><a href="sign-up.html">Sign Up</a></li>
                <li><a href="sign-in.html">Sign In</a></li>
            </ul>
        </nav>
    </div>
</header>
*/}

export default Header