// action types
export const BUTTON = {
    OPEN: 'OPEN',
    CLOSE: 'CLOSE',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
}

// action creators
export const openGate = () => {
    return { type: BUTTON.OPEN, open: true, status: 'BOTH GATES OPENED' }
}

export const closeGate = () => {
    return { type: BUTTON.CLOSE, open: false, status: 'GATE CLOSED' }
}

export const openLeftGate = () => {
    return { type: BUTTON.LEFT, open: true, status: 'LEFT GATE OPENED' }
}

export const openRightGate = () => {
    return { type: BUTTON.RIGHT, open: true, status: 'RIGHT GATE OPENED' }
}