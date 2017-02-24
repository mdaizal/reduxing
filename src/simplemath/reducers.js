import { ADD, SUBSTRACT, MULTIPLY, DIVIDE } from './actions'

const Math = (state = {}, action) => {
  switch(action.type){
    case ADD:
      return MathObject(action)
    case SUBSTRACT:
      return MathObject(action)
    case MULTIPLY:
      return MathObject(action)
    case DIVIDE:
      return MathObject(action)
    default:
      return state
  }
}

const MathObject = (action) => {
  let state
  return Object.assign({}, state, {
    type: action.type,
    value: action.value
  })
}

export default Math