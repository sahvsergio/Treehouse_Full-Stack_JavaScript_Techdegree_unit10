import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Components 

// General components
import Header from './components/Header';

// Courses Components 

import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';

//User Components 
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />
       
        <Route path='/signin' element={<UserSignIn />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/signout' element={<UserSignOut />} />
        <Route element={<PrivateRoute/>}>
          <Route path='/courses/create' element={<CreateCourse />} />
          <Route path='/courses/create' element={<UpdateCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App