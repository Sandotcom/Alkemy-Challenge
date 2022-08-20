import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import Home from './pages/Home'
import ABM from './pages/ABM'
import Edit from './pages/Edit'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/auth' element={<Auth />} />
      <Route exact path='/abm' element={<ABM />} />
      <Route exact path='/edit' element={<Edit />} />
    </Routes>
    </>
  )
}

export default App