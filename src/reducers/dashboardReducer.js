import * as actionTypes from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function dashboardReducer(state = initialState.bookings, action) {
  switch (action.type) {
    case actionTypes.FETCHING_BOOKINGS:
      return objectAssign({}, state, {loading: true, error: undefined});
    case actionTypes.RECEIVE_BOOKINGS:
      return objectAssign({}, state, {bookings: action.bookings, loading: false, error: undefined});
    case actionTypes.API_ERROR:
      return objectAssign({}, state, {loading: true, loading: false, error: action.error});
    default:
      return state;
  }
}
