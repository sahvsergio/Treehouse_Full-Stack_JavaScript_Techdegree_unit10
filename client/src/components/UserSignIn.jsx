import React from "react"
import { useRef, useContext } from 'react';

import { useNavigate,useLocation } from 'react-router-dom';
import UserContext from "../context/UserContext";

const UserSignIn = () => {
// sign in states
  const context = useContext(UserContext);
  const { actions } = context || {};
  const navigate = useNavigate()
  const location=useLocation()
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //start at root by default  
    {/*  */ } 
    let from='/';
    
    if(location.state){
      // assign the new lcoation 
      from=location.state.from;
    }

    // receive credentials 
    const credentials = {
      emailAddress: email.current.value,
      password: password.current.value
    }

    try {
      //attempt sign in by validating credentials
      const user = await actions.signIn(credentials)

      // if  credentials are valid 
      if (user) {
        {/* navigate to their location  */ } 
        navigate(from);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleCancel = (event) => {
    event.preventDefault();
    navigate('/')

  }


  return (<>
   
    <main>
      <div className="form--centered">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            ref={email} />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            ref={password} />
          <button className="button" type="submit">Sign In</button>
          <button className="button button-secondary" onClick={handleCancel} >Cancel</button>
        </form>

      </div>


    </main>
  </>
  )
}

export default UserSignIn;