
import React from 'react'
import { useState} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

//context 

import UserContext from './context/UserContext';

// Components 
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import  CreateCourse from './components/CreateCourse';
import  UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';




const App = () => {
  const [user, setUser]=useState(null);


  return (
    <UserContext.Provider value={
      {
      user
     
    }
    
    }> 
     <BrowserRouter>
    
        <Header />

        <Routes>
          <Route path='/' element={<Courses/>} />
          <Route path='/courses/:id' element={<CourseDetail/>} />
          <Route path='/courses/create' element={<CreateCourse />} />
          <Route path='/signin' element={<UserSignIn/>}/>
          <Route path='/signup' element={<UserSignUp/>}/>           

          



        </Routes>

      </BrowserRouter>
    </UserContext.Provider>

  )

}

export default App
