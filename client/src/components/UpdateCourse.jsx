import React, { useRef, useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { api } from "../apiHelper";

const UpdateCourse = () => {
    // Set context to extract user info
    const { authUser } = useContext(UserContext);
    
    // Set Inital states and  setters for errors and courses
    const [errors, setErrors] = useState([]);
    const [course, setCourse] = useState(null);


    // reference fields 
    const courseTitle = useRef(null);
    const courseDescription = useRef(null);
    const estimatedTime = useRef(null);
    const materialsNeeded = useRef(null);

    //fetching course id from url
    const { id } = useParams();
    const navigate = useNavigate();
    //use effect to fetch current course data  from the api helper
    useEffect(() => {
        api(`/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
            .catch(err => {
                console.error('Failed to load course:', err);
                setErrors(['Error loading course']);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let credentials = {
            emailAddress: authUser.emailAddress,
            password: authUser.password
        }

        const updatedCourse = {
            title: courseTitle.current.value,
            description: courseDescription.current.value,
            estimatedTime: estimatedTime.current.value,
            materialsNeeded: materialsNeeded.current.value
        };

        api(`/courses/${id}`, 'PUT', updatedCourse, credentials, )
            .then(res => {
                if (res.status === 204) {
                    navigate(`/courses/${id}`);
                } else if (res.status === 400) {
                    return res.json().then(data => setErrors(data.errors));
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .catch(err => {
                console.error('Update failed:', err);
                setErrors(['Failed to update course']);
            });
    };

    if (!course) {
        return <p>Loading course details...</p>;
    }

    return (
        <main>
            <div className="wrap">
                <h2>Update Course</h2>
                {errors.length > 0 && (
                    <div className="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            {errors.map((err, index) => <li key={index}>{err}</li>)}
                        </ul>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input id="courseTitle" name="courseTitle" type="text" defaultValue={course.title} ref={courseTitle} />

                            <p>By {course.User?.firstName} {course.User?.lastName}</p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="courseDescription" defaultValue={course.description} ref={courseDescription}></textarea>
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" defaultValue={course.estimatedTime} ref={estimatedTime} />

                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded" defaultValue={course.materialsNeeded} ref={materialsNeeded}></textarea>
                        </div>
                    </div>
                    <button className="button" type="submit">Update Course</button>
                    <button className="button button-secondary" type="button" onClick={() => navigate('/')}>Cancel</button>
                </form>
            </div>
        </main>
    );
};

export default UpdateCourse;
