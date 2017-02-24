import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mathReducers from './reducers'
import App from './App'
import React from 'react'

let mathStore = createStore(mathReducers)

const MathApp = () => (
  <div className="col-lg-6">
    <div className="panel panel-success">
      <div className="panel-heading">
        <h3 className="panel-title">Simple Math App</h3>
      </div>
      <div className="panel-body">
        <Provider store={mathStore}>
          <App />
        </Provider>
      </div>
    </div>
  </div>
)

export default MathApp