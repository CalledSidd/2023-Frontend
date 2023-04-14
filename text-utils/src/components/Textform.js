import React, {useState} from 'react'

function Textform(props) {
  const [text, setText] = useState('Enter Text Here')
  const readTime = text.split(" ").length

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearText = () => {
    let newText = '';
    setText(newText)
  }

  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="form-floating">
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="5" id="floatingTextarea2" ></textarea>
      </div>
      <div>
        <button className="btn btn-primary mt-3"  onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleClearText}>Clear</button>
      </div>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{readTime} Words, {text.length} Characters </p>
      <p>{0.008 * readTime} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

export default Textform