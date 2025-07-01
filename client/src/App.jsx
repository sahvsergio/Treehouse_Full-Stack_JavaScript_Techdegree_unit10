import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Components 
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />
        <Route path='/courses/create' element={<CreateCourse />} />
        <Route path='/signin' element={<UserSignIn />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/signout' element={<UserSignOut />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App