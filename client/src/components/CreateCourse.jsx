import React from "react";
import { useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { api } from "../apiHelper";


const CreateCourse = () => {
    //Prepare the intial settings and states 
    const navigate = useNavigate()
    const { authUser } = useContext(UserContext);
    let courseTitle = useRef(null);
    let courseDescription = useRef(null);
    let estimatedTime = useRef(null);
    let materialsNeeded = useRef(null);
    
   
    const [errors, setErrors] = useState([]);
    


    const handleSubmit = async (event) => {

       
        event.preventDefault();
        
        
        //get the body of the request with new info 
        let course = {
            title: courseTitle.current.value,
            description: courseDescription.current.value,
            estimatedTime: estimatedTime.current.value,
            materialsNeeded: materialsNeeded.current.value,
            userId:authUser.id
        }
       


        //
        try {
            //if no user autthenticated, show sign in
            if (!authUser) {
                navigate('/signin');
            }
            else{
                //else user is authenticated

            //set credentials for api call 
            let credentials = {
                 emailAddress: authUser.emailAddress,
                 password: authUser.password}
              
            //call the api with authenticated credentials 
            let response = await api('/courses', 'POST', course,credentials)
            if(response.status===201){
                //log the new course info to the console.
            console.log({response})
            

         // if user is not authenticated    
        }else if(response.status===401){

             // gather error data and set the error state
            const data=await response.json();
            setErrors(data.errors);
        
        }
            //validation errors ex: no  email, wrong format, etc 
            else if (response.status === 400) {
                const data = await response.json();
                //set errors 
                setErrors(data.errors);

            }
            //anything else happens
        else{
            throw new Error();
        }
            

            
    }
        }
        catch (error) {
            console.log(error);

        }


    }

    const handleCancel = (event) => {
        // 
        event.preventDefault();
        navigate('/')//navigate to root 

    }
    return (
        <main>
            {/* Check if authenticated user exists */} 

            {authUser ? (<div className="wrap">
                <h2>Create Course</h2>
                {/* Check if authenticated user exists */} 
                
                {/*If errors exists, display validation errors  */} 
                {errors.length ? (
                    <div className="validation--errors">
                        <h3 className="validation--errors">Validation errors</h3>
                        <ul className="validation--errors">
                            {errors.map((error, i) => <li className="validation--errors" key={i}>{error}</li>)}
                        </ul>
                    </div>

                ) : (null)}

                <form onSubmit={handleSubmit}>
                    
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input
                                id="courseTitle"
                                name="courseTitle"
                                type="text"
                                ref={courseTitle} />

                            <p>By: {authUser.firstName} {authUser.lastName}</p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea
                                id="courseDescription"
                                name="courseDescription"
                                ref={courseDescription}></textarea>
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input
                                id="estimatedTime"
                                name="estimatedTime"
                                type="text"
                                ref={estimatedTime} />

                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea
                                id="materialsNeeded"
                                name="materialsNeeded"
                                ref={materialsNeeded}></textarea>
                        </div>
                    </div>
                    <button className="button" type="submit">Create Course</button>
                    <button className="button button-secondary" onClick={handleCancel} >Cancel</button>
                </form>
            </div>):(null)}
            
        </main>





    )
}



export default CreateCourse;