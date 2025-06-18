import {useContext, useRef, useState} from 'react';


import { api } from "../apiHelper";


const UserSignUp= ()=>{
    return(
        <main>
            <div className="form-centered">
                <h2>Sign Up</h2>
                <form>
                    <label for="firstName"></label> 
                    <input id="firstName" name="firstName" type="text" value="" />
                  <label for="lastName"></label>
                    <input id="lastName" name="lastName" type="text" value="" />
                  <label for="emailAddress"></label>
                    <input id="emailAddress" name="emailAddress" type="email" value="" />
                  <label for="password"></label>
                    <input id="password" name="password" type="password" value="" />
                    <button class="button" type="submit">Sign Up</button>
                    <button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
                </form>
                <p> Already have an account? Click Here to <a href="sign-in.html"> sign in </a></p>
            </div>
        </main>
        )
}


export default UserSignUp;