import { createStore } from 'redux'


const actionType = {
    RED_OPEN: 'RED OPEN',
    RED_CLOSE: 'RED CLOSE',
    LEFT_OPEN: 'LEFT OPEN',
    RIGHT_OPEN: 'RIGHT OPEN'
}


const stateType = {
    BOTH_OPEN: 'BOTH OPEN',
    BOTH_CLOSE: 'BOTH CLOSE',
    LEFT_OPEN: 'LEFT OPEN',
    RIGHT_OPEN: 'RIGHT OPEN'
}


const initialState = {
    button: actionType.RED_CLOSE,
    gate: stateType.BOTH_CLOSE
}


const autogate = (state = initialState, action) => {
    switch(action.type) {
        case actionType.RED_OPEN:
            return gateObj(stateType.BOTH_OPEN, action.type) 
        case actionType.RED_CLOSE:
            return gateObj(stateType.BOTH_CLOSE, action.type)
        case actionType.LEFT_OPEN:
            if(state.gate === stateType.BOTH_OPEN){
                return state
            }           
            return gateObj(stateType.LEFT_OPEN, action.type)
        case actionType.RIGHT_OPEN:
            if(state.gate === stateType.BOTH_OPEN){
                return state
            }           
            return gateObj(stateType.RIGHT_OPEN, action.type)
        default:
            return state
    }
}

const gateObj = (stateType, action) => {
    let state
    return Object.assign({}, state, {
                button: action,
                gate: stateType
            })
}


const gateStore = createStore(autogate)
console.log(gateStore.getState())
gateStore.dispatch({ type: actionType.RED_OPEN })
console.log(gateStore.getState())
gateStore.dispatch({ type: actionType.RED_CLOSE })
console.log(gateStore.getState())
gateStore.dispatch({ type: actionType.LEFT_OPEN })
console.log(gateStore.getState())
gateStore.dispatch({ type: actionType.RED_CLOSE })
console.log(gateStore.getState())
gateStore.dispatch({ type: actionType.LEFT_OPEN })
console.log(gateStore.getState())
gateStore.dispatch({ type: actionType.RIGHT_OPEN })
console.log(gateStore.getState())
gateStore.dispatch({ type: actionType.RED_CLOSE })
console.log(gateStore.getState())
gateStore.dispatch({ type: actionType.RIGHT_OPEN })
console.log(gateStore.getState())

//reducers (state & action), store (createStore), store.dispatch(action), subscribe
// TWO BUTTONS: READ & GREEN
// ACTIONS: 'RED OPEN', 'RED CLOSE', 'GREEN OPEN LEFT', 'GREEN OPEN RIGHT' ,'RED STOP'
// STATE: 'OPENED', 'CLOSED', 'LEFT OPENED', 'RIGHT OPENED', 'STOPPED'
// FOR BASIC APP, OMIT 'STOP'. JUST 'OPEN' AND 'CLOSE'
//LOGICAL SITUATION: IF BOTH CLOSE = PRESS RED BUTTON => BOTH OPEN
//                                   PRESS GREEN LEFT => LEFT OPEN
//                                   PRESS GREEN RIGHT => RIGHT OPEN
//                   IF BOTH OPEN = PRESS RED BUTTON => BOTH CLOSE
//                   IF LEFT/RIGHT OPEN = PRESS RED BUTTON => LEFT/RIGHT CLOSE