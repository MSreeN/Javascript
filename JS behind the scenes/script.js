"use strict";
// function sample() {
//   let num = 10;
//   if (num) {
//     function sam() {
//       console.log(num);
//     }
//   }

//   return sam()
// }

// sample()

// console.log(add(1,2));
// console.log(addArrow(1,2));
// console.log(addC(1,2));
// function add(a, b){
//   return a+b;
// }

// var addC = function(a,b){
//   return a+ b
// };

// var addArrow = (a, b) => a+b;

// if(!num) sample()
// console.log(num);
// var num = 10;

// function sample(){
//   console.log('deleted');
// }

// const user = {
//   firstName : 'sree',
//   last : function(){

//   }
// }
// console.log(x);

// function sample(){
//   console.log('hello');

// }let x = 10;
// sample()

// console.log(x);

// var x = 10;
// sample()
// function sample(){
//   console.log('hello');
// }

const calcAge = function (birthYear) {
  // console.log(1234 - birthYear);
  // console.log(this);
};

calcAge(1343);

// function sample(){
//   console.log(this);
// }

// sample()

// const sam = function(){
//   console.log(this);
// }

// sam()

const ob = {
  variab: "sm",

  samp: function () {
    // const sample = () => console.log(this);
    // sample();
  },
};
ob.samp();

const men = {
  //  parent scope
  //  object inside object
  job: {
    samplee : 'string',
    sam: function () {
      
        // console.log(this); 
      
    },
  },
};

men.job.sam();

// var a = 10;
// console.log(window.a);

let ab = 10;
function a() {
  b();
  function b() {
    // console.log(ab);
  }
}
a();

const title = document.querySelector("h1");
// console.log(title);







// let namee = "fasd"
const obj = {
  namee: 'sree',
  // const self : this,
  

    sample: function(){
      // const samp = () => console.log(this.namee);
      // samp()
    }
    
}
// console.log(this);
obj.sample()

//arguments

function add(a, b){
  // console.log(arguments);
  // console.log(arguments[2] + arguments[3]);
}

add(3, 4 ,5, 5)


const obj1 = {
  age: 11,
  inOb:{
    country : "india",
    marks: []
  }
}
Object.freeze(obj1)
const obj2 = structuredClone(obj1)

obj1.age = 12;
obj2.name = "sree"
obj2.inOb.country = "Bharat"
obj2.inOb.marks.push(11);
// console.log(obj1.age);
// console.log(obj2.age);
console.log(obj1);
console.log(obj2);

const arr1 = [1,2, {name: "array"}]
const arr2 = Object.assign([], arr1 );
arr2[2] = 11;
arr1[2][0] = 111;
// console.log(arr1 );
// console.log(arr2);

  