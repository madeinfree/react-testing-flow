import React, { Component } from 'react'

const Send = (props) => {
  return (
    <button onClick={ () => props.onClick({ id: 1, title: 'OK' }) }>SEND</button>
  )
}

export default Send
