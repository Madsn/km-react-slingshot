import * as types from '../constants/actionTypes';
import BookingApi from '../api/mockBookingApi';

export function fetchBookings() {
  return function (dispatch) {
    return dispatch({
      type: types.FETCHING_BOOKINGS
    });
  };
}

export function receiveBookings(bookings) {
  return function (dispatch) {
    return dispatch({
      type: types.RECEIVE_BOOKINGS,
      bookings: bookings
    });
  };
}

export function errorFetchingBookings(error) {
  return function (dispatch) {
    return dispatch({
      type: types.API_ERROR,
      error: error
    });
  };
}

export function getAllBookings() {
  return function (dispatch) {
    dispatch(fetchBookings());
    BookingApi.getAllBookings().then(function(bookings) {
      dispatch(receiveBookings(bookings));
    }, function(error) {
      dispatch(errorFetchingBookings(error));
    });
  };
}
