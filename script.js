"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

function updateUI(acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
}

function displayMovements(movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (movement, index) {
    const type = movement > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__value">${movement}</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

displayMovements(account1.movements);

const user = "Steven Thomas Williams";

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cVal) => (acc += cVal), 0);
  labelBalance.textContent = `Rs.${acc.balance}`;
};
//Hard coded argument function call
// calcDisplayBalance(account1.movements);
function calcDisplaySummary(account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cVal) => acc + cVal, 0);
  labelSumIn.textContent = `Rs.${incomes}`;
  const outgoing = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cVal) => acc + cVal, 0);
  // console.log(outgoing);

  labelSumOut.textContent = `Rs.${Math.abs(outgoing)}`;
  //1.2% for every deposit
  const interest = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cVal) => {
      // console.log(cVal);
      // console.log(account.interestRate, "rate");
      let cValInterest = (cVal * account.interestRate) / 100;
      // console.log("interest of above ",cValInterest);
      if (cValInterest >= 1) return acc + cValInterest;
      else return acc + 0;
    }, 0);
  labelSumInterest.textContent = `Rs.${interest}`;
}
//Hard coded function call
// calcDisplaySummary(account1.movements);

function createUserName(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name.at(0))
      .join("");
  });
}

createUserName(accounts);

//Event Handlers
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("clicked");
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value.trim()
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(`${currentAccount.owner} logged in!`);
    //Display ui and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = "100";
    updateUI(currentAccount);
    //clear input fields
    inputLoginPin.value = "";
    inputLoginUsername.value = "";
    //Makes the field to loose focus
    inputLoginPin.blur();
  }
});
//transferring money functionality
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  // console.log(receiverAcc);
  // console.log(receiverAcc.owner, " received amount");
  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username != currentAccount.username
  ) {
    console.log(`Transferred ${amount} to ${receiverAcc.owner}`);
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});
//Loan functionality;
btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  // console.log(amount);
  // console.log((10/100)*amount);
  if(amount >0 && currentAccount.movements.some(mov => mov >= 0.1* amount)){
    console.log("loan granted");
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
})

// Closing account functionality
btnClose.addEventListener('click', function(e){
  e.preventDefault();
  const closeUserName = inputCloseUsername.value;
  const closeUserPin = Number(inputClosePin.value);
  // console.log(closeUserName,closeUserPin);
  if(closeUserName === currentAccount.username && closeUserPin === currentAccount.pin){
    const userIndex = accounts.findIndex(acc => acc.username === closeUserName);
    console.log(userIndex);
    accounts.splice(userIndex,1);
    console.log(accounts);
    containerApp.style.opacity = "0";
  }
  inputClosePin.value = "";
  inputCloseUsername.value = "";
  inputClosePin.blur();
})
//Getting username and pin

// console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const EuroToUsd = 1.1;
const movementsUsd = movements.map(function (val, ind) {
  return Math.trunc(val * EuroToUsd);
});
// console.log(movements, movementsUsd);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
// console.log(deposits);

const withdrawals = movements.filter((amt) => amt < 0);
// console.log(withdrawals);
// console.log(movements);
const balance = movements.reduce(function (pVal, cVal, ind) {
  let maxVal = pVal > cVal ? pVal : cVal;
  return maxVal;
}, movements[0]);

// console.log(balance);
//chaining methods to convert euros to usd
const totalDepositsInUsd = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * EuroToUsd)
  .reduce((acc, cVal) => acc + cVal, 0);
//find method
// console.log(movements.findIndex(mov => mov<0))

// const account  = accounts.find(acc => acc.owner === "Jessica Davis")
// console.log(account);

// const accountMap = accounts.map(acc => acc.owner === "Jessica Davis"? acc:"")
// console.log(accountMap);

// const accountFilter = accounts.filter(mov => mov.owner === "Jessica Davis");
// console.log(accountFilter);

// for (const acc of accounts) {
//   acc.owner === "Jessica Davis"? console.log(acc):"";
// }
///////////some and every method////////////////////
console.log(movements.some(mov => mov>1000))

console.log(movements.every(mov => mov > -1000));