import React from 'react'

const Five = (props) => {
  return (
    <div>
    <h2>Url Of Website: {props.urlData}</h2>
      <p className='content_text'><span className='content_header'>Content Of Website: </span>{props.disData}</p>
    </div>
  )
}

export default Five
