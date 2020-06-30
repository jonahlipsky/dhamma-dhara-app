import * as TODO_API_UTIL from '../util/todo_api_util';
import { receiveHttpRequestErrors } from './error_actions';

// action types
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';

//action creators
export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const fetchTodos = () => ({
  type: FETCH_TODOS,
})

//thunk actions
export const getTodos = () => dispatch => {
  dispatch(fetchTodos())
  return TODO_API_UTIL.getAllTodos().then(
    todos => dispatch(receiveTodos(todos)),
    errors => dispatch(receiveHttpRequestErrors(errors))
  )
}