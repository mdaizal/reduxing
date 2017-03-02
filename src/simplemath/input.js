import React from 'react'
import { _Add, _Substract, _Multiply, _Divide, ADD, SUBSTRACT, MULTIPLY, DIVIDE } from './actions'
import { connect } from 'react-redux'

let Math = ({ dispatch }) => {
  let input1
  let input2
  
  return(
    <form className="form-horizontal">
      <fieldset>
      <div className="form-group">
        <input type="text" placeholder="put first integer" ref={node1 => input1 = node1 } className="form-control" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="put second integer" ref={node2 => input2 = node2 } className="form-control" />
      </div>
        
        
        <div className="btn-group btn-group-justified">
          <a onClick={e => dispatch(_Add(input1.value,input2.value)) } className="btn btn-info">ADD!</a>
          <a onClick={e => dispatch(_Substract(input1.value,input2.value)) } className="btn btn-success">SUBSTRACT!</a>
          <a onClick={e => dispatch(_Multiply(input1.value,input2.value)) } className="btn btn-warning">MULTIPLY!</a>
          <a onClick={e => dispatch(_Divide(input1.value,input2.value)) } className="btn btn-danger">DIVIDE!</a>
          <a onClick={e => 
            document.getElementById('result').innerHTML = ''
            } className="btn btn-default">*CLEAR*</a> {/* clear the results. just a temporary solutions. the state is still intact*/}
        </div>
        </fieldset>
      </form>
  )
}

Math = connect()(Math)

export default Math