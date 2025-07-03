import React from "react";
import { useRef,useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { api } from "../apiHelper";


const CreateCourse = () => {
    const navigate = useNavigate()
    const { actions } = useContext(UserContext);
    let courseTitle=useRef(null);
    let courseDescription=useRef(null);
    let estimatedTime=useRef(null);
    let materialsNeeded=useRef(null);
    
    

    const [errors, setErrors] = useState([]);


    const handleSubmit=async (event)=>{
        event.preventDefault();     
        let course = {
            title: courseTitle.current.value,
            description: courseDescription.current.value,
            estimatedTime: estimatedTime.current.value,
            materialsNeeded: materialsNeeded.current.value
        }
      

       
        try{
            let response= await api('/courses', 'POST',course, null )
            console.log(response);

        }
        catch(error){
            console.log(error) ;

        }


}
    
    const handleCancel = (event) => {
        event.preventDefault();
        navigate('/')

      }
    return (
    <main>
            <div className="wrap">
                <h2>Create Course</h2>
                {errors.length ? (
                    <div className="validation--errors">
                        <h3 className="validation--errors">Validation errors</h3>
                        <ul className="validation--errors">
                            {errors.map((error, i) => <li className="validation--errors" key={i}>{error}</li>)}
                        </ul>
                    </div>

                ) : (null)}
                <form>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input id="courseTitle" name="courseTitle" type="text" value=""/>

                                <p>By Joe Smith</p>

                                <label htmlFor="courseDescription">Course Description</label>
                                <textarea id="courseDescription" name="courseDescription"></textarea>
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" value=""/>

                                <label htmlFor="materialsNeeded">Materials Needed</label>
                                <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
                        </div>
                    </div>
                    <button className="button" type="submit">Create Course</button>
                    <button className="button button-secondary" onClick={handleCancel} >Cancel</button>
                </form>
            </div>
        </main>





    )}



export default CreateCourse;