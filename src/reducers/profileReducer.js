import {
  PROFILE__REQUESTING,
  PROFILE__SUCCESSFULLY_RECEIVED,
  PROFILE__FAILED_RECEIVING
}  from '../constants/ActionTypes';

export default function fuelSavingsReducer(state = {
  profile: {}
}, action) {

  switch (action.type) {

    case PROFILE__REQUESTING:
      return Object.assign({}, state, {
        isFetching: true
      });

    case PROFILE__SUCCESSFULLY_RECEIVED:
      console.log('PROFILE__SUCCESSFULLY_RECEIVED - action', action);
      return Object.assign({}, state, {
        isFetching: false,
        profile: action.response,
        authenticated: action.authenticated || false
      });

    case PROFILE__FAILED_RECEIVING:
      console.log('PROFILE__FAILED_RECEIVING - action', action);
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}
