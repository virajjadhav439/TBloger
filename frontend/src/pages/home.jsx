import React from 'react'
import Navbar from '../components/navbar'
import '../css/Home.css'
const Home = () => {
  return (
    <>
      <Navbar/>
      <section className='hero-section'>
      <h1 className='hero-heading'>
        Express Your Thoughts Beautifully
      </h1>

      <p className='hero-description'>
        A modern glassmorphism blogging platform with immersive themes.
      </p>

      <button className='hero-action-button'>
        Start Blogging
        </button>
      </section>
    </>
  )
}

export default Home