import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
      // document.title = "Textutils - Dark Mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      // document.title = "Textutils - Light Mode";
    }
  }
  return (
    <>
    <BrowserRouter>
    {/* <Navbar title="FirstReactApp" aboutText="FirstApp About" mode={mode} toggleMode={toggleMode} /> */}
    <Navbar title="FirstReactApp" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra spaxes" mode={mode} />} />
      <Route path="/home" element={<TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra spaxes" mode={mode} />} />
      <Route path="/about" element={<About mode={mode}/>} />
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
