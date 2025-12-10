import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './conponents/NavBar'
import { Footer } from './conponents/Footer'
import { Routes } from './conponents/Routes'


const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen ">
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App
