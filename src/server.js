import express from 'express';
import cors from 'cors';

let app = express();
app.use(cors()); // TODO: Disable when running in PROD

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

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getAllBookings', function (req, res) {
  res.set('content-type', 'application/json');
  res.send(bookings);
});

app.get('/getSingleBooking/:bookingId', function (req, res) {
  res.set('content-type', 'application/json');
  let booking = bookings.find(function (o) { return o.id == req.params.bookingId; });
  res.send(booking);
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!'); // eslint-disable-line no-console
});
