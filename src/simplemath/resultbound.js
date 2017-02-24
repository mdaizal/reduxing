import { connect } from 'react-redux'
import results from './results'

const mapStateToProps = (state) => {
  return { result: state }
}

const ShowResult = connect(
  mapStateToProps,
  null
)(results)

export default ShowResult