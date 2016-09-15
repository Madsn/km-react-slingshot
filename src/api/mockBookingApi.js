import delay from './delay';

const bookings = [
  {
    id: 1,
    category: "Dog",
    customer: "John Papa",
    details: "Masser af mad!",
    status: "Nice status",
  },
  {
    id: 2,
    category: "Cat",
    customer: "Mikkel Madsen",
    details: "Miav!",
    status: "No idea what status is"
  },
  {
    id: 3,
    category: "Dog",
    customer: "Eric Clapton",
    details: "It loves guitar solos",
    status: "Layla!",
  },
  {
    id: 4,
    category: "Turtle",
    customer: "Mathis Møller",
    details: "I like turtles",
    status: "TURTLE POWER",
  },
  {
    id: 5,
    category: "Donkey",
    customer: "Cory house ",
    details: "et Æææsel",
    status: "Nice status",
  },
  {
    id: 6,
    category: "Dog",
    customer: "Scott Hanselman",
    details: "The dog is clean, like my code",
    status: "No idea what status is"
  }
];

const generateId = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4();
};

class BookingApi {
  static getAllBookings() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], bookings));
      }, delay);
    });
  }

  static getSingleBooking(bookingId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, bookings.find(function (o) { return o.id == bookingId; })));
      }, delay);
    });
  }

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
}

export default BookingApi;
