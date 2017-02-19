import React, { Component } from 'react'
import CounterButton from './Counter'

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
        <CounterButton />
      </div>
    )
  }
}

export default App