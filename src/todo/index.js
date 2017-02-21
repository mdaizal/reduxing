import { createStore } from 'redux'
import todoApp from './reducers'
import React from 'react'
import { Provider } from 'react-redux'
import App from './components/App'

let store = createStore(todoApp)

const Todo = () => (
    <div className="col-lg-8">
        <div className="panel panel-success">
            <div className="panel-heading">
                <h3 className="panel-title">Todo App</h3>
            </div>
            <div className="panel-body">
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
        </div>
    </div>
)

export default Todo