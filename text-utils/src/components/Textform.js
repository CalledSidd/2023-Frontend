import React, {useState} from 'react'

function Textform(props) {
  const [text, setText] = useState('Enter Text Here')
  const readTime = text.split(" ").length

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success")
  }

  const handleClearText = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Cleared", "success")
  }

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleCopy = () => {
    var text = document.getElementById('text-area')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied", 'success')
  }
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="form-floating">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'#212529', color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="5" id="text-area" ></textarea>
      </div>
      <div>
        <button className="btn btn-primary mt-3"  onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleClearText}>Clear</button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleCopy}>Copy</button>
      </div>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{readTime} Words, {text.length} Characters </p>
      <p>{0.008 * readTime} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter Something for Preview :)'}</p>
    </div>
    </>
  )
}

export default Textform