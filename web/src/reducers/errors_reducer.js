import { merge } from 'lodash';
import { RECEIVE_HTTP_REQUEST_ERRORS } from '../actions/error_actions';

export default ( state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_HTTP_REQUEST_ERRORS:
      return merge(newState, {['httpRequestErrors']: action.errors})

    default:
      return state;
  }
}