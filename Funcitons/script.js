'use strict';
const bookings = []
function createBooking(flightNum, numPassengers = 5, price = 1000){
  const booking = {
    flightNum,
    numPassengers,
    price
  }
  // console.log(booking);
  bookings.push(booking)
}

createBooking('LH123', undefined, 5000)
// console.log(bookings);

const flight = "LH234";
const jonas = {
  name: 'Sree',
  passport: 2345543254353
}

function checkIn(flightNum, passenger){
  flightNum = "3434",
  passenger.name= "Mr. " +passenger.name;
}
// const b = structuredClone(jonas)
// console.log(checkIn(flight, b));
// console.log(flight);
// console.log(jonas);


const newPassport = function(person){
  
}

//////////First Class and higher order function
function upperFirstWord(str){
  const [firstWord, ...restWords] = str.split(" ");
  return [firstWord.toUpperCase(), ...restWords].join(" ")
}

function transformer(str, func){
  console.log(`Transformed string is ${func(str)}`);
}

// transformer function will call the upperFirstWord function
transformer("JavaScript is the best!", upperFirstWord)
//^^ Higher order function--call back function^^^