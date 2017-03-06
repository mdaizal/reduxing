import React, { Component } from 'react'
import { createStore } from 'redux'

// action types
const PLUS = 'PLUS'
const MINUS = 'MINUS'

// reducers
const plusminus = (state, action) => {
  switch(action.type) {
    case 'PLUS':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

const backendData = () => {
  return new Promise((resolve, reject) => {
    const val = fetch('http://localhost:3003/api/counter', { method: 'GET' })
                  .then((res) => { return resolve(res.json()) }).catch((err) => { reject(Error(err)) })
  })
}

const DisplayComp = (props) => {
  const displayState = () => {
    document.getElementById('countVal').innerHTML = props.counter.getState()
  }
  props.counter.subscribe(displayState)
  return(
      <div className="col-lg-4">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Counter. State from Server</h3>
          </div>
          <div className="panel-body">
            <button className="btn btn-primary" onClick={ () => props.counter.dispatch({ type: PLUS })}>+</button>
            <button className="btn btn-danger" onClick={ () => props.counter.dispatch({ type: MINUS })}>-</button>
            <div className="well">
              <h2 id="countVal">{ props.state }</h2>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App