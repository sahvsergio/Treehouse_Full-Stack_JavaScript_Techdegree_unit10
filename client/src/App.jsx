import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'



import UserContext from './context/UserContext'
import Header from './components/Header'
import Courses from './components/Courses'
import { api } from './apiHelper'








const App = () => {
  const [user, setUser]=useState(null);
 
  let courses=()=>{
    api('courses ').then(response=>console.log(response))
  };

  


  return (
    <UserContext.Provider value={
      {
      user:user,
      courses:courses

    }
    
    }> 
     <BrowserRouter>
    
        <Header />

        <Routes>
          <Route path='/' element={<Courses data={courses} />} />



        </Routes>

      </BrowserRouter>
    </UserContext.Provider>

  )

}

export default App
