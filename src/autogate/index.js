// this app is a noob attempt to further understanding redux. do not follow is highly recommended

// got 3 buttons: red, green, blue
// red: open and close both gate panel
// green: only open left panel
// blue: only open right panel
// state: opened: all, left only, right only. closed: all
// simulation 1: state: closed. active button: red, green, blue to open gate
// simulation 2: state: all/left only/right only opened. active button: red only to close gate
// actions available: button clicks: to open and close the gate
// possible reducers: (state = 'CLOSED', action)

// watchify .\index.js -o test.js -v -t [ babelify --presets [ es2015 react ] ]

import { createStore } from 'redux'

// action types
const ACTIVE_BUTTON = {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE'
}

// action creators
const openGate = () => {
    return { type: ACTIVE_BUTTON.RED, gateStatus: 'OPENED' }
}

const closeGate = () => {
    return { type: ACTIVE_BUTTON.RED, gateStatus: 'CLOSED' }
}

const openLeftGate = () => {
    return { type: ACTIVE_BUTTON.GREEN, gateStatus: 'LEFT GATE OPENED' }
}

const openRightGate = () => {
    return { type: ACTIVE_BUTTON.BLUE, gateStatus: 'RIGHT GATE OPENED' }
}

// initial state
const initialState = {
    gateStatus: 'CLOSED',
    activeButton: 'ALL'
}


// reducers
const autogate = (state = initialState, action) => {
    switch(action.type) {
        case ACTIVE_BUTTON.RED:
            return gateObj('OPENED', action.type)
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
        activeButton: activeButton
    })
}

// test
console.log(Gate.getState())
Gate.dispatch({ type: ACTIVE_BUTTON.RED })
console.log(Gate.getState())