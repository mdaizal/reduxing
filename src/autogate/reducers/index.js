import { BUTTON } from '../actions'

// initial state
const initialState = {
    open: false,
    status: 'GATE CLOSED'
}

// gate object
const gateObj = (action) => {
    let state
    return Object.assign({}, state, {
        open: action.open,
        button: action.type,
        status: action.status
    })
}


// reducers
const autogate = (state = initialState, action) => {
    switch(action.type) {
        case BUTTON.OPEN:
            return (!state.open)? gateObj(action) :  state
        case BUTTON.LEFT:
            return (!state.open)? gateObj(action) :  state
        case BUTTON.RIGHT:
            return (!state.open)? gateObj(action) :  state
        case BUTTON.CLOSE:
            return (state.open)? gateObj(action) :  state
        default:
            return state
    }
}

export default autogate