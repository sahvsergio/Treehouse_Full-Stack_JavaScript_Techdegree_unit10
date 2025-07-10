import React, { useEffect, useState, useContext } from 'react';


import { useParams, Link, useNavigate } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import { api } from '../apiHelper';
import UserContext from '../context/UserContext';


const CourseDetail = () => {
    const navigate=useNavigate()
    const {authUser} = useContext(UserContext);
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [error, setErrors] = useState(null);

    useEffect(() => {
        api(`/courses/${id}`)
            .then(res => res.json())

            .then((data) =>{
                console.log("Course data:", data); 
                setCourse(data);
            })
            .catch(err => {
                console.error('Failed to load course:', err);
                setErrors('Error loading course');
            });
    }, [id]);

    
    const deleteCourse=async ()=>{
        let credentials = {
            emailAddress: authUser.emailAddress,
            password: authUser.password
        }
          api(`/courses/${id}`, 'DELETE', null, credentials, )
                     .then(res => {
                         if (res.status === 204) {
                             navigate('/');
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
                    {authUser && course.userId === authUser.id && (
                        <>
                            <Link className="button" to={`/courses/${id}/update`}>Update Course</Link>
                            <button className="button" onClick={deleteCourse}>Delete Course</button>
                        </>
                    )}

                    <Link className="button button-secondary" to="/">Return to List</Link>

                </div>
            </div>

            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            <p>By {course.User?.firstName} {course.User?.lastName}</p>

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