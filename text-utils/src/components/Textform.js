import React, {useState} from 'react'

function Textform(props) {
  const [text, setText] = useState('Enter Text Here')
  const handleUpClick = () => {
    console.log("Uppercase clicked")
    setText("HandleUpclick")
    console.log(text)
  }

  const handleOnChange = (e) => {
    console.log("On Click")
    setText(e.target.value)
  }
  return (
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="form-floating">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="floatingTextarea2" ></textarea>
      </div>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>Uppercase</button>
    </div>
  )
}

export default Textform