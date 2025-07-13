import React from 'react'
import Nav from './Nav'; 





const Header=()=>{
    return (
    <>
            {/* Setting ehaders */} 
            <header>
                <div className="wrap header--flex" >
                    <h1 className="header--logo">  Courses
                    </h1>
                    {/* Bringing the nav component */} 
                    <Nav/>

              
                 </div>




            </header>
    
    </>

)}


export default Header