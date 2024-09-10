import React,{useState} from 'react'
export default function TextForm(props) {
  const handleUpClick =()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
  }
  const handleLowClick =()=>{
      let newText = text.toLowerCase();
      setText(newText);
  }
  const handleOnChange =(event)=>{
      setText(event.target.value);
  }
  const handleClearText =(event)=>{
      setText('');
  }



    const [text, setText] = useState('');
  return (
    <>
    <div>
      <div className="container"></div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
    </div>

    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008*(text.split(" ").length-1) + " minutes to read"}  </p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
  
}
