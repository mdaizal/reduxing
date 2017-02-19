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

const actionType = {
    inc: 'INCREMENT',
    dec: 'DECREMENT'
}

const displayState = () => {
  document.getElementById('lbl').innerHTML = store.getState()
}

store.subscribe(displayState)

class CounterButton extends Component {
  constructor(props) {
    super(props);
    
    this.IncrementButton = this.IncrementButton.bind(this)
    this.DecrementButton = this.DecrementButton.bind(this)
  }

  IncrementButton(e) {
    store.dispatch({ type: actionType.inc })
  }

  DecrementButton(e) {
    store.dispatch({ type: actionType.dec })
  }

  componentDidMount() {
    displayState()
  }

  render() {
    return(
      <div className="row">
        <div className="col-lg-4">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Counter</h3>
            </div>
            <div className="panel-body">
              <button type="submit" onClick={ this.IncrementButton } className="btn btn-default">+</button>
              <button type="submit" onClick={ this.DecrementButton } className="btn btn-default">-</button>
              <br />
              <br />
              <h2 id="lbl"></h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CounterButton