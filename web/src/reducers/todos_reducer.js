import { merge } from 'lodash';
import { RECEIVE_TODOS, FETCH_TODOS } from '../actions/todo_actions'

export default ( state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach( todo => {
        newState = merge(newState, {[todo.id]: todo})
      })
      return newState;
    case FETCH_TODOS:
      console.log("Fetching todos!")
    default:
      return state;
  }
}