import React, { PropTypes } from 'react'
import { ADD, SUBSTRACT, MULTIPLY, DIVIDE } from './actions'
const Results = ({ result }) => {
  return(
    <div className="well" id="result">
      {result.map((math, i = 0) => {
        return <li key={i++}>{math.type + ': ' + math.value}</li>
      })}
    </div>
  )
}

Results.propTypes = {
  result: PropTypes.array.isRequired
}

export default Results