import delay from './delay';
import request from 'superagent';
/*
const generateId = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4();
};
*/

class BookingApi {
  static getAllBookings() {
    return new Promise((resolve) => {
      setTimeout(() => {
        request.get('http://localhost:3333/getAllBookings')
          .set('Accept', 'application/json')
          .end(function(err, res) {
            if (err) {
              // Handle error
              resolve(err);
            } else {
              resolve(res.body);
            }
          });
      }, delay);
    });
  }

  static getSingleBooking(bookingId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        request.get('http://localhost:3333/getSingleBooking/' + bookingId)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            if (err) {
              // Handle error
              resolve(err);
            } else {
              resolve(res.body);
            }
          });
      }, delay);
    });
  }
/*
  static saveBooking(booking) {
    booking = Object.assign({}, booking);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minCustomerNameLength = 2;

        if (booking.customer.length < minCustomerNameLength) {
          reject(`Customer name must be atleast ${minCustomerNameLength} characters.`);
        }

        if (booking.id) {
          const existingBookingIndex = bookings.findIndex(a => a.id == booking.id);
          bookings.splice(existingBookingIndex, 1, booking);
        } else {
          booking.id = generateId();
          bookings.push(booking);
        }
      });
    });
  }

  static deleteBooking(bookingId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfBookingToDelete = bookings.findIndex(booking => {
          bookingId == booking.id;
        });
        bookings.splice(indexOfBookingToDelete, 1);
        resolve();
      }, delay);
    });
  }
*/
}

export default BookingApi;
