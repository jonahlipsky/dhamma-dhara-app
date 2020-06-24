import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todo_actions';
import Todos from './todos'

const mapStateToProps = (state, ownProps) => {
  let todos = Object.values(state.todos)
  return({ todos })
}

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Todos));