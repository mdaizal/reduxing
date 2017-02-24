import React, { PropTypes } from 'react'

const Results = ({ result }) => {
  return(
    <div className="well">
      { result.type }:&nbsp;&nbsp;{ (!result.value)? 'Please...' : result.value }
    </div>
  )
}

Results.propTypes = {
  result: PropTypes.object.isRequired
}

export default Results