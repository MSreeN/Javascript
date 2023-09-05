/////////making this keyword inside a child function of function point to object event if it being called normally.
const obj = {
  nameObj: "sample",
  Sample() {
    // const inside = () =>{
    //   console.log(this);
    // }
    console.log(this);

    //unlike arrow function this normal function doesn't lexically point to parent, this inside this depends on the context that function being called that's why we need to bind this inside below fun to sample
    function inside() {
      console.log(this);
    }
    const pointToObj = inside.bind(this);
    pointToObj();

    ///this inside arrow function points lexically to its parent function which is here sample and this inside sample points to the obj.
    const innerFunArrow = () => {
      console.log(this);
    };

    console.log("this from innerFunArrow", innerFunArrow());

    const insideFunExpression = function () {
      console.log("from function expression", this);
    };
    const insideFunExpressionBind = insideFunExpression.bind(this);
    //in this method call this will point to the window obj
    insideFunExpression();
    insideFunExpressionBind();
  },
  innerArrow: () => {
    console.log("inner arrow", this);
  },
};

////if these function are normally called then this points to window
const arrow = () => {
  console.log(this);
};

function normal() {
  console.log(this);
}

arrow();
normal();

obj.Sample();
obj.innerArrow();

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 1);
arr.splice(1, 0, 6);
console.log(arr);

arguments(1, 2, 3);

function arguments(a, b) {
  console.log(a, b);
  console.log(arguments.length);
}
console.log("-------------------------------");
//////////////////////////cloning of obj////////////////

////////////////////assign ////////////////////
const original = {
  a: 1,
  b: 2,
  originalFun() {
    console.log("this is from original function");
  },
  innerOriginal: {
    innerA: 3,
    innerB: 4,
  },
};

//using assign method to clone object dosen't actually clone the inner objects, inner objects in cloned object still point to same memory point to where original array inner object is point to
const cloneUsingAssign = Object.assign({}, original);

cloneUsingAssign.innerOriginal.a = 10;
console.log(original.innerOriginal.a);
//below log prints 10 because we've used assign method which doesn't clone inner objects.
console.log(cloneUsingAssign.innerOriginal.a);

function change() {
  console.log("newly changed function");
}

cloneUsingAssign.originalFun = change;

original.originalFun();
cloneUsingAssign.originalFun();
console.log("---------------------------------");

////////////////////////json.parse(json.stringify)

//////can't access methods of object using parse because it doesn't copy methods.
const cloneUsingParse = JSON.parse(JSON.stringify(original));

// cloneUsingParse.originalFun = change;

// cloneUsingParse.originalFun();
console.log("-----------------------------------");

//////////////////////////////using structuredClone

//can't perform clone if original object has methods
// const cloneUsingStructured = structuredClone(original);

// console.log(cloneUsingParse);

let a = 10;
let b = 12;

[a, b] = [b, a];
console.log(a, b);

({ a, b } = original);

console.log(a, b);

const arra = [];

const objDes = {
  c: 1,
  d: 4,
};
let c, d;
({ c: arra[0], d: arra[1] } = objDes);

console.log(arra);

///splitting string using ...spread operator
const st = "khyathi";
const nam = [...st];
console.log(nam);

console.log("--------------------------------");

///////////////////&& || ?? operators

console.log(" " || null || null || undefined);

console.log(null && 6 && undefined);

console.log(0 ?? 10 ?? null);
let flag = false;
console.log(flag || "hello");

console.log("----------------------------------------");

///////////////array methods////////////////
const array = [5, 2, 3, 4, undefined];
for (const ele of array.entries()) {
  console.log(ele);
}

const optional = {
  has: "has",
};

////////slice
const ar = array.splice(1, 0, 100);
console.log(array);
// console.log(array.splice(-1));
// console.log(array);
console.log(array.join(" "));

/////filter

const filtered = array.filter((val, ind, ar) => val);
console.log(filtered);

/////reduce

const greater = array.reduce((acc, cVal) => (acc < cVal ? cVal : acc));
console.log(greater);

const greater2 = array
  .filter((ele) => ele)
  .reduce((acc, cVal, index) => {
    console.log(acc + "at index " + index);
    return cVal + acc;
  });
console.log(greater2);
console.log(array);

const flat = [1, 2, [3, 4, [5, 6]]];
const flatarr = flat.map((v, i) => {
  let val = v;
  console.log(`${val} at index ${i}`);
});

const add = flat.reduce((acc, cVal) => {
  return acc + cVal;
}, 0);
console.log(add);

////array sort method

const unsorted = [3, 52, 62, 6, 3, 15, 6];
const sorted = unsorted.sort((a, b) => {
  return a - b;
});

console.log(sorted);

console.log("-----------------------------");

const obje = {
  a: 10,
  b: 20,
};

for (i of Object.values(unsorted)) {
  console.log(i);
}

///////////////map
const map = new Map();
map.set(document.querySelector(".sample"), 10);
map.set("a", 10);
console.log(map);
console.log(map.get(document.querySelector(".sample")));

for (const [a, b] of map.entries()) {
  console.log(a, b);
}

const mapKeys = map.keys();
console.log(mapKeys);

/////////Numbers

const num = "12q77wer";
const filteredVal = [...num].filter( val => isFinite(val)).join("");
console.log(filteredVal);

///set timeout
function x(){
  let timeout;
  function close(j){
    timeout = setTimeout(()=> {
      console.log(j++);
    }, 1000*j)
  }
  setTimeout(() => {
    console.log(timeout);
  }, 7000);
  
  
  for(var j = 1; j<=5; j++) close(j);
}

// x()

//////////set interval

function interval(){
  let j = 1;
  const interval = setInterval(() => {
    console.log(j++);
    if(j>9) clearInterval(interval)
  }, 1000*j);
  // if(j>9) clearInterval(interval)
}

// interval()


////////////////Strings///////////////////

const str = "sree";
console.log(str.indexOf("e",3));

const nums = [0,2,1,5]
const ab = nums.splice(2,0,100);
console.log(nums);


///////////////////apply, bind, call ////////////////////////////////////////

const objBind = {
  name: "Sree",  
  age: 20,
  print(){
    console.log(`${this.name} and ${this.age}`);
  }
}

const objSec = {
  name: "second object",
  age: 21
}

// const callObj = objBind.print.call(objSec);
// const applyObj = objBind.print.apply(objSec)
// const bindObj = objBind.print.bind(objSec)
// bindObj()

const addObj = {
    addition(a,b){
      console.log(`${a+b}`);
    }
}
const addToFive = addObj.addition.bind(null, 5);
addToFive(10);


///////////////////////////////////Closure//////////////////////////////

function outer(){
  let a = 10;
  setInterval(function(){
    console.log(a++);
  },1000)
}

// outer();

////////////////////////////Numbers///////////
////////////random number between two numbers
let max = 10;
let min = 5;

const randNum = (Math.random() * (max -min))+min;
console.log(Math.round(randNum));

let fl = 2.7;
console.log(fl.toFixed(2));

//////////////////////////////Dates///////////////////

const date = new Date();
// console.log(+date);

////no.of days between two days

const date1 = new Date();
const date2 = new Date("Sep 10 2023")

const remainingDays = +date2 - +date1;
console.log(Math.ceil(remainingDays/(1000 * 60 * 60 * 24)));

// console.log(date2);

