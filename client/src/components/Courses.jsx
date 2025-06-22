import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';

const Courses = () => {
    const { courses } = useContext(UserContext);

    return (
        <main>
            <div className="wrap main--grid">
                {courses.length > 0 ? (
                    courses.map(course => (
                        <Link
                            to={`/courses/${course.id}`}
                            key={course.id}
                            className="course--module course--link"
                        >
                            <h2 className="course--label">Course</h2>
                            <h3 className="course--title">{course.title}</h3>
                        </Link>
                    ))
                ) : (
                    <p>Loading courses or none available...</p>
                )}

                <Link to="/courses/create" className="course--module course--add--module">
                    <span className="course--add--title">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 13 13"
                            className="add"
                        >
                            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6" />
                        </svg>
                        New Course
                    </span>
                </Link>
            </div>
        </main>
    );
};

export default Courses;
