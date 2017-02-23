import { createStore } from 'redux'
import autogate from './reducers'
import { Provider } from 'react-redux'
import React from 'react'
import App from './components/App'

let gate = createStore(autogate)

const GateApp = () => (
    <div className="col-lg-6">
        <div className="panel panel-success">
            <div className="panel-heading">
                <h3 className="panel-title">Autogate</h3>
            </div>
            <div className="panel-body">
                <Provider store={gate}>
                    <App />
                </Provider>
            </div>
        </div>
    </div>
)

export default GateApp