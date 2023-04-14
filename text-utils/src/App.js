import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() { 
  const [mode, setMode] = useState('dark')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=> {
    setAlert({
      msg : message,
      type: type,
    })
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      showAlert("Dark Mode is enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode is enabled","success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Textform heading="Enter Text Here" mode={mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;

