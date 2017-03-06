import React, { Component } from 'react'
import CounterButton from './Counter'
import Todo from './todo'
import GateApp from './autogate'
import MathApp from './simplemath'
import Counter from './CounterTwo'

class App extends Component {

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
              <h1>REDUXING</h1>
              <p>Everything about Redux</p>
            </div>
          </div>
        </div>
        <div className="row">
          <CounterButton />
          <Todo />
        </div>
        <div className="row">
          <GateApp />
          <MathApp />
        </div>
        <div className="row">
          <Counter />
        </div>
      </div>
    )
  }
}

export default App