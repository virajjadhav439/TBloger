import { useEffect } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CreatePost from './pages/CreatePost'
function App() {
    useEffect(()=>{
      fetch('http://localhost:3000/api/message')
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
    },[])

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element ={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/create' element={<CreatePost/>} />
      </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
