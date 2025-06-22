import { useState ,useEffect} from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'



import UserContext from './context/UserContext'
import Header from './components/Header'
import Courses from './components/Courses'
import { api } from './apiHelper'








const App = () => {
  const [user, setUser]=useState(null);
  const [courses,setCourses]=useState([])

  useEffect(()=>{
    api('/courses').then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Failed to fetch courses:', error));
  }, []);


 
  

  


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
          <Route path='/' element={<Courses/>} />



        </Routes>

      </BrowserRouter>
    </UserContext.Provider>

  )

}

export default App
