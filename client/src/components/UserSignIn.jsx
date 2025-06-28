import React from "react"
import { useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { api } from '../apiHelper';

const UserSignIn=()=>{
    const navigate = useNavigate()

    const email = useRef(null);
    const password = useRef(null);
     const[errors, setErrors]=useState([]);
    const handleSubmit= (event )=>{
        event.preventDefault();
        const credentials={
            emailAddress: email.current.value,
            password: password.current.value

        }
    try{ 
          let response= api('/users','GET',user );
          response.then((responseData)=>{
    
            if (responseData.status===200){
              responseData.then((userData)=>{

                let user=userData.json()
                console.log(user)
              })
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
    const handleCancel = (event) => {
        event.preventDefault();
        navigate('/')

      }
  
  
    return(<>
       <main>
        <div className="form--centered">
            <h2>Sign In</h2>
                {errors.length ? (
                    <div className="validation--errors">
                        <h3 className="validation--errors">Validation errors</h3>
                        <ul className="validation--errors">
                            {errors.map((error, i) => <li className="validation--errors" key={i}>{error}</li>)}
                        </ul>
                    </div>

                ) : (null)}
                <form onSubmit={handleSubmit}>
                <label htmlFor="emailAddress">Email Address</label>
                <input 
                id="emailAddress" 
                name="emailAddress"
                type="email"
                ref={email}/>
                <label htmlFor="password">Password</label>
                <input 
                id="password" 
                name="password" 
                type="password" 
                ref={password}/>
                <button className="button" type="submit">Sign In</button>
                    <button className="button button-secondary" onClick={handleCancel} >Cancel</button>
            </form>

        </div>


       </main>
    </>
    )}

export default UserSignIn;
