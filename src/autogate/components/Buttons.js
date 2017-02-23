import React, { PropTypes } from 'react'

const Button = ({ status, actions }) => {
    return(
        <div>
            <p>Please close the gate before opening both/right/left gate. Thank you.</p>
            <form onSubmit={e =>
                e.preventDefault()
            }>
                <button type="button" onClick={ () => actions.onOrangeClick() } className="btn btn-warning">CLOSE</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" onClick={ () => actions.onRedClick() } className="btn btn-danger">OPEN</button>
                <button type="button" onClick={ () => actions.onGreenClick() } className="btn btn-success">OPEN LEFT</button>
                <button type="button" onClick={ () => actions.onBlueClick() } className="btn btn-primary">OPEN RIGHT</button>                
            </form>
            <div className="well">
                { status.status }
            </div>
        </div>
    )
}

Button.propTypes = {
    status: PropTypes.object.isRequired,
    actions: PropTypes.shape({
        onRedClick: PropTypes.func.isRequired,
        onGreenClick: PropTypes.func.isRequired,
        onBlueClick: PropTypes.func.isRequired,
        onOrangeClick: PropTypes.func.isRequired
    }).isRequired,
}

export default Button