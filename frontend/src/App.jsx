import { useEffect } from 'react'
import './App.css'

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
      <h1>Hello</h1>
    </>
  )
}

export default App
