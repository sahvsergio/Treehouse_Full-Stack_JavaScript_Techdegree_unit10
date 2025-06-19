import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'



import UserContext from './context/UserContext'
import Header from './components/Header'
import Courses from './components/Courses'








const App = () => {
  const [user, setUser]=useState(null);
 
  


  return (
    <UserContext.Provider value={
      {
      user:user,

    }
    
    }> 
     <BrowserRouter>
        {console.log(UserContext)}
        <Header />

        <Routes>
          <Route path='/' element={<Courses />} />



        </Routes>

      </BrowserRouter>
    </UserContext.Provider>

  )

}

export default App
