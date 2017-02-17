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

console.log(`Original state: ${store.getState()}`)

store.dispatch({ type: 'INCREMENT' })

console.log(`Updated state after INCREMENT: ${store.getState()}`)

store.dispatch({ type: 'DECREMENT' })

console.log(`Updated state after DECREMENT: ${store.getState()}`)

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })

console.log(`Updated state after 2x INCREMENT: ${store.getState()}`)

store.dispatch({ type: 'GILA BABI' })

console.log(`State returned to recent state when action type not matching: ${store.getState()}`)