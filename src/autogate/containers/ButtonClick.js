import { connect } from 'react-redux'
import { openGate, openLeftGate, openRightGate, closeGate } from '../actions'
import Button from '../components/Buttons'

const mapStateToProps = (state) => {
    return { 
        status: state,
        btnVal: (!state.open)? 'OPEN' : 'CLOSE'
     }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions:{
            onRedClick: () => {
                dispatch(openGate())
            },
            onGreenClick: () => {
                dispatch(openLeftGate())
            },
            onBlueClick: () => {
                dispatch(openRightGate())
            },
            onOrangeClick: () => {
                dispatch(closeGate())
            }
        }
    }
}

const ButtonClicks = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)

export default ButtonClicks