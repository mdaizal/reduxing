import React, { Component } from 'react'
import { createStore } from 'redux'

// action types
const PLUS = 'PLUS'
const MINUS = 'MINUS'
const SAVE = 'SAVE'

// reducers
const plusminus = (state, action) => {
  switch(action.type) {
    case 'PLUS':
      return state + 1
    case 'MINUS':
      return state - 1
    case 'SAVE':
      return NEWVALUE(action)
    default:
      return state
  }
}

const NEWVALUE = (action) => {
  let state
  fetch(`http://localhost:3003/api/counter/${action.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      initial: action.newVal
    }) 
  })
  return Object.assign(action.newVal, state)
}

const backendData = () => {
  return new Promise((resolve, reject) => {
    const val = fetch('http://localhost:3003/api/counter', { method: 'GET' })
                  .then((res) => { return resolve(res.json()) }).catch((err) => { reject(Error(err)) })
  })
}

class CounterApp extends Component {  

  constructor() {
    super()
    this.state = {
      initial: '',
      id: ''
    }
    const val = backendData()
    val.then((v) => {
      this.setState({ 
        initial: v[0].initial,
        id: v[0]._id })
    })
  }

  render() {

    const countStore = createStore(plusminus, this.state.initial)

    const displayState = () => {
      document.getElementById('countVal').innerHTML = countStore.getState()
    }

    countStore.subscribe(displayState)

    return(
      <div className="col-lg-4">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Counter. State from Server</h3>
          </div>
          <div className="panel-body">
            <button className="btn btn-primary" onClick={ () => countStore.dispatch({ type: PLUS }) }>+</button>
            <button className="btn btn-danger" onClick={ () => countStore.dispatch({ type: MINUS }) }>-</button>
            <button className="btn btn-success" onClick={ () => {
                countStore.dispatch({ type: SAVE, newVal: countStore.getState(), id: this.state.id })
                //this.setState({ initial: countStore.getState() })
              } } style={{ marginLeft: 10 }}>Save</button>
            <div className="well">
              <h2 id="countVal">{ (countStore.getState() === '')? this.state.initial : countStore.getState() }</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CounterApp