'use strict';
const bookings = []
function createBooking(flightNum, numPassengers = 5, price = 1000){
  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking)
}

createBooking('LH123')
console.log(bookings);