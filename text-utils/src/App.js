import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() { 
  const [mode, setMode] = useState('dark')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=> {
    setAlert({
      msg : message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      showAlert("Dark Mode is enabled","success")
      document.title = 'TextUtils - Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode is enabled","success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Routes>
      <Route path='/about' element={<About/>} />
      <Route path='/' element={<Textform  heading="Enter Text Here" mode={mode} showAlert={showAlert}/>} />
    </Routes>
    </Router>
  );
}

export default App;

