import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import Home from './pages/Home'
import ABM from './pages/ABM'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/auth' element={<Auth />} />
      <Route exact path='/abm' element={<ABM />} />
    </Routes>
    </>
  )
}

export default App