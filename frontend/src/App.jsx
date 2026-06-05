import { useEffect } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CreateBlog from './pages/CreateBlog'
import BlogCard from './components/BlogCard'
import BlogPage from './pages/blogPage'
import SingleBlog from './pages/SingleBlog'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element ={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/create' element={<CreateBlog/>} />
        <Route path='/blogs' element={<BlogPage/>}/>
        <Route path='/blogs/:id' element={<SingleBlog/>}/>
      </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
