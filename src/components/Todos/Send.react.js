import React, { Component } from 'react'

const Send = (props) => {
  return (
    <button onClick={ () => props.onClick(props.text) }>SEND</button>
  )
}

export default Send
