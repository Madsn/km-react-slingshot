import * as actionTypes from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function dashboardReducer(state = initialState.dashboard, action) {
  let newState;
  switch (action.type) {
    case actionTypes.FETCHING_BOOKINGS:
      newState = objectAssign({}, state);
      newState.loading = true;
      newState.error = undefined;
      return newState;
    case actionTypes.RECEIVE_BOOKINGS:
      newState = objectAssign({}, state);
      newState.loading = false;
      newState.bookings = action.bookings;
      newState.error = undefined;
      return newState;
    case actionTypes.API_ERROR:
      newState = objectAssign({}, state);
      newState.loading = false;
      newState.error = action.error;
      return newState;
    default:
      return state;
  }
}
