import { merge } from 'lodash';

export default ( state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {

    default:
      return state;
  }
}