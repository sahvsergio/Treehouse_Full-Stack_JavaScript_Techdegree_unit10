import React, { useEffect, useState } from 'react';


import { useParams, Link } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import { api } from '../apiHelper';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        api(`/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
            .catch(err => {
                console.error('Failed to load course:', err);
                setError('Error loading course');
            });
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!course) return <p>Loading...</p>;

    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" to={`/courses/${id}/update`}>Update Course</Link>
                    <button className="button">Delete Course</button>
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

                            <p>{course.description}</p>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime || 'Not specified'}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                {course.materialsNeeded?.split('\n').map((item, index) => (
                                    <li key={index}>{item.trim()}</li>
                                )) || <li>None listed</li>}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CourseDetail;
