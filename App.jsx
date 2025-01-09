import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>It shaala</h1>
      <h2>It shaala 2</h2>
      <Home/>
    </>
  )
}



export default App
