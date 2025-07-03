import {useContext,useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';


import { api } from "../apiHelper";

const UserSignUp= ()=>{
  const {actions}=useContext(UserContext);
  const firstName=useRef(null);
  const lastName=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const[errors, setErrors]=useState([]);
  const navigate = useNavigate()

  const handleSubmit=  (event)=>{

    event.preventDefault();
    
    const user={
      firstName:firstName.current.value,
      lastName:lastName.current.value,
      emailAddress:email.current.value,
      password:password.current.value
    }
    try{ 
      let response= api('/users','POST',user );
      response.then((responseData)=>{

        if (responseData.status===201){
          actions.signIn(user)
        }

        else if(responseData.status===400){
          const data = responseData.json();
          data.then((errorList)=>{
            setErrors(errorList.errors);
      })
    }
    else{
      throw new Error();
    }
  })}
  catch(error){
    console.log(error);
      navigate('/error');
  }
}

  
  const handleCancel=(event)=>{
    event.preventDefault();
    navigate('/')
    
  }

    return(
        <main>
            <div className="form--centered">
                <h2>Sign Up</h2>
                {errors.length?(
                  <div className="validation--errors">
                    <h3 className="validation--errors">Validation errors</h3>
                    <ul className="validation--errors">
                {errors.map((error, i) => <li className="validation--errors" key={i}>{error}</li>)}
                    </ul>
                  </div>
                  
                ):(null)}
                <form  onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label> 
                    <input 
                    id="firstName"
                    name="firstName"
                    type="text"
                    ref={firstName}/>

                  <label htmlFor="lastName">Last Name </label>
                    <input 
                    id="lastName" 
                    name="lastName"
                    type="text"
                    ref={lastName} />
                  <label htmlFor="emailAddress">Email Address </label>
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
                    <button className="button" type="submit">Sign Up</button>
                    <button  type="button" className="button button-secondary" onClick={handleCancel} >Cancel</button>
                </form>
                <p> Already have an account? Click Here to <Link to="/signin" > sign in </Link></p>
            </div>
        </main>
        )
}



export default UserSignUp;