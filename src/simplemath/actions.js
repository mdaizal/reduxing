// action types
export const ADD = 'ADD'
export const SUBSTRACT = 'SUBSTRACT'
export const MULTIPLY = 'MULTIPLY'
export const DIVIDE = 'DIVIDE'


// action creators
export const _Add = (input1, input2) => {
  const _val = Number.parseFloat(input1) + Number.parseFloat(input2)
  return { type: ADD, value: _val }
}

export const _Substract = (input1, input2) => {
  const _val = Number.parseFloat(input1) - Number.parseFloat(input2)
  return { type: SUBSTRACT, value: _val }
}

export const _Multiply = (input1, input2) => {
  const _val = Number.parseFloat(input1) * Number.parseFloat(input2)
  return { type: MULTIPLY, value: _val }
}

export const _Divide = (input1, input2) => {
  const _val = Number.parseFloat(input1) / Number.parseFloat(input2)
  return { type: DIVIDE, value: _val }
}