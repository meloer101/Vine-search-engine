import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './conponents/NavBar'
import { Footer } from './conponents/Footer'
import { Routes } from './conponents/Routes'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes />
      <Footer />
    </>
  );
}

export default App
