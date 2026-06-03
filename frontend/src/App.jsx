import { useEffect } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CreatePost from './pages/CreatePost'
import BlogCard from './components/BlogCard'
import BlogPage from './pages/blogPage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element ={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/create' element={<CreatePost/>} />
        <Route path='/blogs' element={<BlogPage/>}/>
      </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
