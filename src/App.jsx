import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar title="FirstReactApp" aboutText="FirstApp About" />
    <div className="container my-3">
      {/* <TextForm heading="Enter the text value here"/> */}
      <About />
    </div>
    </>
  )
}

export default App
