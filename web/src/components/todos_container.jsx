import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todo_actions';
import Todos from './todos'

const msp = (state, ownProps) => {
  return({})
}

const mdp = dispatch => ({
  getTodos: () => dispatch(getTodos())
})

export default withRouter(connect(msp, mdp)(Todos));