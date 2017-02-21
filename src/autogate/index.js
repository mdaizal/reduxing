// this app is a noob attempt to further understanding redux. do not follow is highly recommended

// got 3 buttons: red, green, blue
// red: open and close both gate panel
// green: only open left panel
// blue: only open right panel
// state: opened: all, left only, right only. closed: all
// simulation 1: state: closed. active button: red, green, blue to open gate
// simulation 2: state: all/left only/right only opened. active button: red only to close gate
// actions available: buttons: to open and close the gate
// possible reducers: (state = 'CLOSED', action)

// watchify .\index.js -o test.js -v -t [ babelify --presets [ es2015 react ] ]

import { createStore } from 'redux'

// action types
const BUTTON = {
    OPEN: 'OPEN',
    CLOSE: 'CLOSE',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
}

// action creators
const openGate = () => {
    return { type: BUTTON.OPEN, gateStatus: 'OPENED' }
}

const closeGate = () => {
    return { type: BUTTON.CLOSE, gateStatus: 'CLOSED' }
}

const openLeftGate = () => {
    return { type: BUTTON.LEFT, gateStatus: 'LEFT GATE OPENED' }
}

const openRightGate = () => {
    return { type: BUTTON.RIGHT, gateStatus: 'RIGHT GATE OPENED' }
}

// initial state
const initialState = {
    gateStatus: 'CLOSED',
    button: BUTTON.CLOSE
}


// reducers
const autogate = (state = initialState, action) => {
    switch(action.type) {
        case BUTTON.OPEN:
            return gateObj(action.gateStatus, action.type)
        case BUTTON.CLOSE:
            return gateObj(action.gateStatus, action.type)
        case BUTTON.LEFT:
            return gateObj(action.gateStatus, action.type)
        case BUTTON.RIGHT:
            return gateObj(action.gateStatus, action.type)
        default:
            return state
    }
}

// createStore
let Gate = createStore(autogate)

// gate object
const gateObj = (gateStatus, activeButton) => {
    let state
    return Object.assign({}, state, {
        gateStatus: gateStatus,
        button: activeButton
    })
}

// test
console.log(Gate.getState())
Gate.dispatch(openGate())
console.log(Gate.getState())
Gate.dispatch(openLeftGate())
console.log(Gate.getState())
Gate.dispatch(openRightGate())
console.log(Gate.getState())