"use strict";
const bookings = [];
function createBooking(flightNum, numPassengers = 5, price = 1000) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  // console.log(booking);
  bookings.push(booking);
}

createBooking("LH123", undefined, 5000);
// console.log(bookings);

const flight = "LH234";
const jonas = {
  name: "Sree",
  passport: 2345543254353,
};

function checkIn(flightNum, passenger) {
  (flightNum = "3434"), (passenger.name = "Mr. " + passenger.name);
}
// const b = structuredClone(jonas)
// console.log(checkIn(flight, b));
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {};

//////////First Class and higher order function
function upperFirstWord(str) {
  const [firstWord, ...restWords] = str.split(" ");
  return [firstWord.toUpperCase(), ...restWords].join(" ");
}

function transformer(str, func) {
  console.log(`Transformed string is ${func(str)}`);
}

// transformer function will call the upperFirstWord function
// transformer("JavaScript is the best!", upperFirstWord)
//^^ Higher order function--call back function^^^

/////////////functions returning functions

function greet(name) {
  return function () {
    // console.log(`Hello ${name}`);
  };
}

const retFun = greet("sree");
// retFun();
// greet("sree")("Hello")

/////////Writing above function using arrow function

const greet1 = (name) => {
  return (greet) => console.log(`${greet} ${name}`);
};

// const returnFunc = greet1("sree")
// returnFunc("Hello")

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    // console.log(`${name} booked a seat on ${this.airline}
    //  flight ${this.iataCode}${flightNum}`);
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};
// lufthansa.book(239, "sree")
// lufthansa.book(635, "khyathi")

const euroWings = {
  name: "EuroWings",
  iataCode: "EW",
  bookings: [],
};
//Call method

const book = lufthansa.book;
//we are calling call method and call will call the
//book function with this keyword set to the object
// book.call(lufthansa, 234, "sree")
// book.call(euroWings,234, "sree")
// console.log(lufthansa.bookings);
// console.log(euroWings.bookings);

//////////apply method
// book.apply(lufthansa,['mah', "mah"])
// console.log(lufthansa.bookings);

////////////////Bind Method
const bookEW = book.bind(euroWings);
bookEW(1234, "sree");

///bind with event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

const buyPlane = document.querySelector(".buy");
const buyPlaneFun = lufthansa.buyPlane.bind(lufthansa);
// const buyPlaneFunBind = buyPlaneFun.bind(lufthansa)
buyPlane.addEventListener("click", buyPlaneFun);

function sample(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}

const stoneSample = sample.bind(null, "from bind", "from bind2");
// stoneSample("from args")

/////////inner function
function addTax(rate) {
  return function (value) {
    return value + value * rate;
  };
}

const inner = addTax(0.23);
// console.log(inner(100));
/////

/////////////Immediately invoked function expression
// const obj = {
//   sam(){
//     console.log("outside func");
//     (function(){
//       console.log("inside func");
//     })();
//   }
// }

// obj.sam()

/////////////////////////Closures///////////////////////

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker)

//////////////closure examples//////////////////

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
// f()
h();
// f();
// console.log(f)

//Example 2

function boardPassengers(n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups. each with ${perGroup} passengers`);
  }, wait*1000);
  console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180,3)