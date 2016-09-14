import initialState from './initialState';
import objectAssign from 'object-assign';
import {RECEIVE_SINGLE_BOOKING} from '../constants/actionTypes';

export default function bookingReducer(state = initialState.viewBooking, action) {
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_BOOKING:
      newState = objectAssign({}, state);
      newState.booking = action.booking;
      return newState;
    default:
      return state;
  }
}
