import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Header from './components/Header'
import Courses from './components/Courses'








const App = () => {


  return (<BrowserRouter>
    <Header />

    <Routes>
      <Route path='/' element={<Courses />} />


    </Routes>

  </BrowserRouter>

  )

}

export default App
