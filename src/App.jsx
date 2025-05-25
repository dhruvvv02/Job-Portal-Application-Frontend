import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllPosts from './components/AllPosts'
import Create from './components/Create'
import Edit from './components/Edit'

function App() {
  

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPosts/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/edit' element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
