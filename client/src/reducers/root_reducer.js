import { combineReducers } from 'redux';
import todos from './todos_reducer';
import errors from './errors_reducer';

export default combineReducers({
    todos,
    errors
});