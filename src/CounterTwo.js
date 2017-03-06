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

class Counter extends Component {

  constructor() {
    super()
    this.state = {initial: ''}
  }

  getValueFromServer() {
    const val = Promise.resolve(
      fetch('http://localhost:3003/api/counter',{ method: 'GET' })
        .then((res) => { return res.json() }).then((data) => { return data.start })
      )
    return val
  }

  componentDidMount() {
    // const val = this.getValueFromServer()
    // val.then((v) => {
    //   console.log(`DATA: ${v}`)
    // })
  }

  render() {
    const val = this.getValueFromServer()
    val.then((v) => {
      console.log(v)
    })

    const countStore = createStore(plusminus, 10)

    function displayState() {
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
            <button className="btn btn-primary" onClick={ () => countStore.dispatch({ type: PLUS })}>+</button>
            <button className="btn btn-danger" onClick={ () => countStore.dispatch({ type: MINUS })}>-</button>
            <div className="well">
              <h2 id="countVal">{ countStore.getState() }</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter