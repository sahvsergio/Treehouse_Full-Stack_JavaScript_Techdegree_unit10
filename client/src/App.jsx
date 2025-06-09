import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Header from './components/Header'









function App() {


  return (<>
<Header/>
<Routes>
  <Route path='/' element={<Courses/>}/>


</Routes>
  
</>

)
    
}

export default App
