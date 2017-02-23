import React, { Component } from 'react'

const List = (props) => {
  return (
    <div>
      {
        props.todos ? props.todos.map((todo, index) => {
          return (
            <div style={ { display: 'flex' } } key={ index }>
              <div>
                { todo.title }
              </div>
              <button>x</button>
            </div>
          )
        }) : null
      }
    </div>
  )
}

export default List
