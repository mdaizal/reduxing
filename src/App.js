import React, { Component } from 'react'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

class App extends Component {
  constructor(props) {
    super(props);
    
    this.IncrementButton = this.IncrementButton.bind(this)
    this.DecrementButton = this.DecrementButton.bind(this)
  }

  IncrementButton(e) {
    store.dispatch({ type: 'INCREMENT' })
    document.getElementById('lbl').innerHTML = store.getState()
  }

  DecrementButton(e) {
    store.dispatch({ type: 'DECREMENT' })
    document.getElementById('lbl').innerHTML = store.getState()
  }

  componentDidMount() {
    document.getElementById('lbl').innerHTML = store.getState()
  }

  render() {
    return(
      <div>
        <button type="submit" onClick={ this.IncrementButton } value="INC">+</button>
        <button type="submit" onClick={ this.DecrementButton } value="DEC">-</button>
        <br />
        <br />
        <label id="lbl"></label>
        <label id="lbl2"></label>
      </div>
    )
  }
}

export default App

// console.log(`Original state: ${store.getState()}`)

// store.dispatch({ type: 'INCREMENT' })

// console.log(`Updated state after INCREMENT: ${store.getState()}`)

// store.dispatch({ type: 'DECREMENT' })

// console.log(`Updated state after DECREMENT: ${store.getState()}`)

// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })

// console.log(`Updated state after 2x INCREMENT: ${store.getState()}`)

// store.dispatch({ type: 'GILA BABI' })

// console.log(`State returned to recent state when action type not matching: ${store.getState()}`)