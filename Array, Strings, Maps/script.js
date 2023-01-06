"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(`pizza with ingredients ${mainIngredient} and ${otherIngredients}
 is ready.`);
  },
};

// function sample(a,b){
//   return [a,b]
// }

// const [one, two] = sample(1,2)
// console.log(one, two);

// const array = [1, 2, [3,4]]
// let [a,,[b,c]] = array
// console.log(a,b, c);

////object destructuring

// let {name, categories = [ ], openingHours: hours = []} = restaurant
// // console.log(name, categories, hours);

// const obj = {
//   a:10,
//   b:11
// }

// let first = 5;
// let second = 6;

// ({a: first, b:second} = obj);
// // console.log(first, second);

// let a = 111;
// let b = 999;
// const sample = {
//   a: 21,
//   b: 7,
//   c: 14
// };

// ({a,b} = sample)
// // console.log(a,b);
// let open = 11;
// let close = 22;
// ({open, close} = restaurant.openingHours.fri)
// // console.log(open, close);

// //function automatically destructuring the paras

// function destruct(a, b,c){
//   return "a,b,c"
// }

// // console.log(destruct({
// //   b:"b",
// //   a: "a",
// //   c: "c"
// // }))

// /////Spread Operator

// const baseArr = [1, 2, 3, 4]
// const newArr = [...baseArr]

// const oneArr = [1,2,3]
// const twoArr = [4,5,6]
// const finalArr = [...oneArr, ...twoArr]
// // console.log(finalArr);

// //Spread operator on string

// const string = "hello";
// const greet = [...string]
// // console.log(greet);

// const str = "one"

// //spread operator as function argument
// function forSpread(a,b,c,d = 'd'){
//   // console.log(a, b, c,d);
// }

// forSpread(...finalArr)

// // spread operator on objects

// const newRestaurant = {
//   ...restaurant,
//   newVar : "newly added var"
// }

// newRestaurant.name = "sree"

// // console.log(newRestaurant.name);
// // console.log(restaurant.name);

///////////////////////////////////////////////////
////////////Rest operator

const [ar, arr, ...c] = [1, 2, 3, 4, 5];
// console.log(ar, arr, c);

const [food1, food2, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(food1, food2, otherFood);

//////////////////////////rest with objects
const obj = {
  name: "sree",
  city: "hyd",
  age: 21,
  job: "developer",
};

const { name, city, ...otherInfo } = obj;
// console.log(name, city, otherInfo);

const { sat: weekends, ...weekdays } = restaurant.openingHours;
// console.log(weekends, weekdays);

/////////////////////////////rest operator with functions

// const a = 10;
// const b = 11;
function sample(...a) {
  // console.log(a);
}

sample(1, 2, 4);

// console.log(restaurant.orderPizza("a","b","c"));

////////////////////////     || and &&

// console.log(""|| undefined|| null|| 10);

// console.log(10 && undefined);

let a = 5;
let b = a ?? 10;
// console.log(b);
// console.log("" || undefined || 5 || false);

//////////////////////// for of loop

const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const i of fullMenu) {
  // console.log(i);
}

// console.log([...fullMenu.entries()]);
// console.log(restaurant);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const ele of days) {
  // console.log(ele);
  let aval = restaurant.openingHours?.[ele]?.open ?? "Closed";
  // console.log(`on ${ele} we open at ${aval}`);
}

const arrr = [
  {
    a: 10,
  },
];
// console.log(arrr[0]?.a ?? "ele doesnot exist");

for (const [days, timings] of Object.entries(restaurant.openingHours)) {
  // console.log(`we are open on ${days} from ${timings.open} to ${timings.close}`);
}

for (const i of Object.values(restaurant.openingHours)) {
  // console.log(i );
}

const val = Object.keys(restaurant.openingHours);
// console.log(`we are open on ${val.length} days: ${[...val]}`);

//////////////////////////sets

const orderSet = new Set(["pasta", "pizza", "Risotto", "pasta", "pizza"]);
// console.log(orderSet);
// let sam = orderSet;
// console.log(orderSet[0]);
orderSet.add("magi");
// console.log(orderSet);
// console.log(orderSet.has("Magi"));
orderSet.delete("magi");
orderSet.clear();
// console.log("size of set is",orderSet.size);
// console.log(orderSet.size);

////////Removing duplicates in array using set
///removing duplicates in array
let dup = ["a", "b", "c", "a"];
// console.log("array", dup);
const dupSet = [...new Set([...dup])];
// console.log("set", dupSet);

//////counting unique ele in array
// console.log(new Set(dup).size);

///////counting different letters in a string

let string = "sreerds";
// console.log(new Set(string).size );

////////////Maps

const rest = new Map();
rest.set("name", "Plaza pizza").set(1, "hyd").set(2, "bza")
.set('categories', restaurant.categories)
.set('open',11)
.set('close', 23)
.set(true,"We are open")
.set(false, "We are closed")

// console.log(rest);

const curTime = 24;
// console.log(rest.get(curTime> rest.get('open')?true:false));
// rest.set(document.querySelector('h1'),"Selector")
// console.log(rest);
const question = new Map([
  ['question', "What is the best prog lang?"],
  [1, "C"],
  [2, "Java"],
  [3,"Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"]
])
// console.log(question);
////////////////iteration of maps
// console.log(question.get('question'));
// for (const [key, value] of question.entries()) {
//   if(typeof key === 'number') console.log(`Option : ${key}. ${value}`);
// }

// const userAns = Number(prompt("What is you answer(Enter option)"))
// console.log(question.get(userAns === question.get("correct")));
// // // console.log();

// console.log(restaurant, question);
// console.log(...question);
const [aa,,,bb] = [...question]
// console.log(aa, bb);

// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// for (const element of question.values()) {
//   console.log(element);
// }

const arrrr = [...question.entries()]
// console.log(arrrr);


////////////Working with strings