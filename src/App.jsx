import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compenents/Header'
import Main from './compenents/Main'
import Footer from './compenents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
