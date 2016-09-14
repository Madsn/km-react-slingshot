import * as types from '../../constants/actionTypes';
import BookingApi from '../../api/mockBookingApi';

export function receiveSingleBooking(booking) {
  return function (dispatch) {
    return dispatch({
      type: types.RECEIVE_SINGLE_BOOKING,
      booking: booking
    });
  }
}

export function fetchSingleBooking(bookingId) {
  return function (dispatch) {
    BookingApi.getSingleBooking(bookingId).then(function(booking) {
      console.log(booking);
      dispatch(receiveSingleBooking(booking));
    }, function(error) {
      console.error(error);
    });
  };
}
