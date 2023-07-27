import React from 'react'
import './One.css'
const One = (props) => {
  console.log(props.disData);
  return (
    <div>
      <h2>Url Of Website: {props.urlData}</h2>
      <p className='content_text'><span className='content_header'>Content Of Website: </span>{props.disData}</p>
      
    </div>
  )
}

export default One
