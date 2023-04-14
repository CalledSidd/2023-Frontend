import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() { 
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils"/>
      <Textform heading="Enter Text Here"/>
      {/* <About/> */}
    </>
  );
}

export default App;
