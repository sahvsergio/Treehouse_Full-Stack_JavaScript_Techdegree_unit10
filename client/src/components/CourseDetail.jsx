import React, { useEffect, useState, useContext } from 'react';


import { useParams, Link, useNavigate } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import { api } from '../apiHelper';
import UserContext from '../context/UserContext';


const CourseDetail = () => {
    // the components displays info for one individual course
    
    //prepare the initial settings 
    const navigate=useNavigate()
    const {authUser} = useContext(UserContext);
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [error, setErrors] = useState(null);


    // use effect to  pull course data on each page refresh
    useEffect(() => {
        api(`/courses/${id}`)
        // turn the promise into json 
            .then(res => res.json())

            .then((data) =>{
                //assign the data info to courses
               
                setCourse(data);
            })
            .catch(err => {
                // catching errors in the console and adding error message
                console.error('Failed to load course:', err);
                setErrors('Error loading course');
            });
    }, [id]);

    // setting the delete course  function 
    const deleteCourse=async ()=>{
        // determine credentials as api requires it 
        let credentials = {
            emailAddress: authUser.emailAddress,
            password: authUser.password
        }
        // call the api including the credentials 
          api(`/courses/${id}`, 'DELETE', null, credentials, )
                     .then(res => {
                        // if successfully deleted(204 status), then redirect to home 
                         if (res.status === 204) {
                             navigate('/');
                             // else  if anything is missing in the body of the request
                         } else if (res.status === 400) {
                             return res.json().then(data => setErrors(data.errors));
                         } else {
                             throw new Error('Something went wrong');
                         }
                     })
                     .catch(err => {
                         console.error('Course Deletion failed:', err);
                         setErrors(['Failed to delete  course']);
                     });
             };
         
             if (!course) {
                 return <p>Loading course details...</p>;
             }
         
    


    if (error) return <p>{error}</p>;
    if (!course) return <p>Loading...</p>;
 

    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    {/* Check if authenticated user exists and
                    authenticated user is  the course owner*/} 
                    {authUser && course.userId === authUser.id && (
                        <>
                            {/* If authenticated user === course owner
                             display  update and delete course button
                             */} 
                            <Link className="button" to={`/courses/${id}/update`}>Update Course</Link>
                            <button className="button" onClick={deleteCourse}>Delete Course</button>
                        </>
                    )}
                    {/* Display the return  to course list */} 
                    <Link className="button button-secondary" to="/">Return to List</Link>

                </div>
            </div>

            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            {/*  Set all values to the standard values in course */} 
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            <p>By {course.User?.firstName} {course.User?.lastName}</p>

                            {/*  Use Reactmarkdown to style course description */} 
                            <ReactMarkdown>{course.description}</ReactMarkdown>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime || 'Not specified'}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                <ReactMarkdown>{course.materialsNeeded}</ReactMarkdown>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CourseDetail;