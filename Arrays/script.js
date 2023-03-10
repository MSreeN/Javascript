'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES




//////////////////////slice///////////////////////////
let arr = ['a', 'b', 'c','d', 'e']
// console.log(arr.slice(4,2));
// console.log(arr.slice());
// const str = 'hello';
///////////////////////splice//////////////////////
// const ar = arr.splice(1,1)
// console.log(ar);
// console.log(arr);  
// console.log(arr.splice(arr.length-1,1));
// console.log(arr);

//////////////////reverse/////////////////////
arr = ['a', 'b', 'c','d', 'e']

const arr2 = ['j', 'i', 'h', 'g', 'f'];
const newArr = arr2.reverse();
// console.log(newArr);
// console.log(arr2);
// console.log(arr2.concat([...arr]))

////////////////at //////////////////////////////////
const arra = [23, 11, 64];
// console.log(arra.at(0));
// console.log(arra.at());
// console.log(arra.at(-1));
// console.log("strr".at(-1));

///////////////////forEach///////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function(movement){
  // if(movement>0) console.log(`${movement} credited`);
  // else console.log(`${Math.abs(movement)} debited`);
})
console.log("==============");
movements.forEach(function(array,value,index){
  // console.log(value);
})
////////forEach with map and sets//////////////
////////////////////////map////////////////
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(currency,key){
  console.log(currency, " : ",key);
})
//////////set///////////////
const currSet = new Set(currencies.keys())

currSet.forEach(function(values,set, map){
  console.log(values,set, map);
})