import React, { Component } from 'react'

const List = (props) => {
  return (
    <div>
      {
        props.todos ? props.todos.map((todo, index) => {
          return (
            <div key={ index }>
              { todo.title }
            </div>
          )
        }) : null
      }
    </div>
  )
}

export default List
