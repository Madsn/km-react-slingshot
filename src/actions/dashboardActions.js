import * as types from '../constants/actionTypes';

export function getAllBookings(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.GET_ALL_BOOKINGS,
      settings
    });
  };
}
