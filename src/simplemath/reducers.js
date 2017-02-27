import { ADD, SUBSTRACT, MULTIPLY, DIVIDE } from './actions'

// just for fun
const MathObject = (action) => {
  let state
  return Object.assign({}, state, {
    type: action.type,
    value: action.value
  })
}

// ...aaaannnd we can see previous calculation results with spread operators (previous state)
const Math = (state = [], action) => {
  switch(action.type){
    case ADD:
    case SUBSTRACT:
    case MULTIPLY:
    case DIVIDE:
      return [
        ...state,
        MathObject(action)
      ]
    default:
      return state
  }
}

export default Math

// old reducers. NOOBS
//const Math = (state = {}, action) => {
//   switch(action.type){
//     case ADD:
//       return MathObject(action)
//     case SUBSTRACT:
//       return MathObject(action)
//     case MULTIPLY:
//       return MathObject(action)
//     case DIVIDE:
//       return MathObject(action)
//     default:
//       return state
//   }
// }

/////// NOOBS /////////////
// const _Add = (state = {}, action) => {
//   switch(action.type){
//     case ADD:
//     default:
//       return state
//   }
// }

// const _Substract = (state = {}, action) => {
//   switch(action.type){
//     case SUBSTRACT:
//     default:
//       return state
//   }
// }

// const _Multiply = (state = {}, action) => {
//   switch(action.type){
//     case MULTIPLY:
//     default:
//       return state
//   }
// }

// const _Divide = (state = {}, action) => {
//   switch(action.type){
//     case DIVIDE:
//     default:
//       return state
//   }
// }