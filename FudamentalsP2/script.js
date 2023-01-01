"use strict";
// let sample = " ";
// sample = "dsa";
// console.log(sample);

//arrow function

// const calcAge = birthYear => 2022 - birthYear;
// console.log(calcAge(2001));

// const remainYears = age => 60 - age;

// const retirement = (birthYear, userName) => {
//   const age = 2022 - birthYear;

//   return remainYears(age);
// }

// console.log(retirement(2001, "sree"));

//coding challenge 1
// 'use strict';
// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3)/3;
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if(avgDolphins >= 2*avgKoalas){
//     console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`);
//   }else if(avgKoalas >= 2*avgDolphins){
//     console.log(`Koalas win(${avgDolphins} vs ${avgKoalas})`);
//   }
//   else{
//     console.log("no one has won");
//   }
// }
// const avgDolphins = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);
// checkWinner(avgDolphins, avgKoalas);

// arrays

// const userName = "sree";
// const friends = ["asfa","ajk"]
// const arrName = ["as", userName, 44-55, friends];
// console.log(arrName);

// const ar = friends.unshift("hello");
// console.log(ar,friends);

// if (friends.push("hii")<10) {
//   console.log("hello is ");
// }

//arrays challenge 2
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// function calcTip(bill){
//   if (bill>=50 && bill<= 300) {
//     return ((15/100)*bill);
//   }
//   else{
//     return ((20/100)*bill);
//   }
// }

// const total = [tips[0]+ bills[0]];
// console.log(total);

//objects

const sree = {
  firstName: "Sree",
  lastName: "mahi",
  birthYear: 1975,
  friends: ["fr1", "fr2", "fr3"],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old, and he has ${
      this.hasDriversLicense ? "a drivers license" : "no drivers license"
    }`;
  },
};
// console.log(sree.calcAge());
// console.log(sree.age);
// console.log(sree.getSummary());

// challenge 3

// const mark ={
//   firstName : "Mark",
//   lastName : "Miller",
//   weight : 78,
//   height: 1.69,
//   calcBMI : function(){
//     this.BMI= this.weight / (this.height **2)
//     return this.BMI
//   }
// }

// const john ={
//   firstName : "John",
//   lastName : "Smith",
//   weight : 92,
//   height: 1.95,
//   calcBMI : function(){
//     this.BMI= this.weight / (this.height **2)
//     return this.BMI
//   }
// }
// john.calcBMI();
// mark.calcBMI();

// if (mark.BMI > john.BMI) {
//   console.log(`Mark's BMI (${mark.BMI}) is greater than John's BMI (${john.BMI})`);
// } else {
//   console.log(`John's BMI (${john.BMI}) is greater than Mark's BMI (${mark.BMI})`);

// }

//Arrays

// const arr = [
//   'sree',
//   'khyathi',
//   10-3,
//   "student",
//   ['fr1', 'fr2', 'fr3']
// ];

// const typeOfEle = [];

// for(let eachV = 0; eachV < arr.length; eachV++){
//   console.log(arr[eachV]);
//   typeOfEle.push(typeof arr[eachV]);
// }

// console.log(typeOfEle);

// const birthYears = [1991, 2007, 1969, 2020]
// const age = []

// for(let i = 0; i< birthYears.length; i++){
//   age.push(2037-birthYears[i]);
// }
// // console.log(age);

// for(let i = 0; i< arr.length; i++){
//   if (typeof arr[i] === 'number') break;
//   // console.log(arr[i]);
// }

// looping array backwards using for
// const arr = [
//   'sree',
//   'khyathi',
//   10-3,
//   "student",
//   ['fr1', 'fr2', 'fr3']
// ];

// for(let i = arr.length-1; i>=0; i--){
//   console.log(arr[i]);
// }

// for(let i = 1; i<=3; i++){
//   console.log(`"------Starting exercise ${i}"`);
//   for(let j = 1; j<=5; j++){
//     console.log(`Lifting weight repetition ${j} ${i}`);
//   }

// }

//while loop

// let randomVar;
// while(randomVar !== 6){

//   randomVar = Math.trunc(Math.random() * 6) + 1 ;
//   console.log(randomVar);

// }

//challenge 4

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return (15 / 100) * bill;
  } else {
    return (20 / 100) * bill;
  }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// function calcTip(bills){
//   for(let i = 0; i< bills.length; i++ ){
//     let currBill =bills[i];
//     if(currBill >= 50 && currBill <= 300){
//       tips.push((15/100)*currBill)
//     }
//     else{
//       tips.push((20/100)*currBill)
//     }
//   }
// }

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

// console.log(bills);
// console.log(tips);
// console.log(totals);

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // console.log(sum);
};

calcAvg([2, 3, 6]);

//practice
const data1 = [17, 21, 23];

function printForecast(arr){
  let str = '';
  for(let i =0; i< data1.length; i++){
    str += `...${data1[i]}C in ${i+1} days....`
  }
  return str;
}
console.log(printForecast(data1));