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
    
    this.CounterButton = this.CounterButton.bind(this)
  }

  CounterButton(e) {
    const buttonType = e.target.value
    switch(buttonType){
      case '+':
        store.dispatch({ type: 'INCREMENT' })
      case '-':
        store.dispatch({ type: 'DECREMENT' })
      default:
        //document.getElementById('lbl').innerHTML = store.getState()
    }

    document.getElementById('lbl').innerHTML = store.getState()
  }

  componentDidMount() {
    document.getElementById('lbl').innerHTML = store.getState()
  }

  render() {
    return(
      <div>
        <button type="submit" onClick={ this.CounterButton } value="+">+</button>
        <button type="submit" onClick={ this.CounterButton } value="-">-</button>
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