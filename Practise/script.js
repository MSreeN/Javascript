

/////////making this keyword inside a child function of function point to object event if it being called normally. 
const obj = {
  nameObj: "sample",
  Sample(){
    // const inside = () =>{
    //   console.log(this);
    // }
    console.log(this);

    //unlike arrow function this normal function doesn't lexically point to parent, this inside this depends on the context that function being called that's why we need to bind this inside below fun to sample
    function inside(){
      console.log(this);
    }
    const pointToObj = inside.bind(this);
    pointToObj()

    ///this inside arrow function points lexically to its parent function which is here sample and this inside sample points to the obj.
    const innerFunArrow = () => {
      console.log(this);
    }

    console.log("this from innerFunArrow", innerFunArrow());

    const insideFunExpression = function(){
      console.log("from function expression", this);
    }
    const insideFunExpressionBind = insideFunExpression.bind(this)
    //in this method call this will point to the window obj 
    insideFunExpression();
    insideFunExpressionBind()
  },
  innerArrow: ()=>{
    console.log("inner arrow",this);
  }
}

////if these function are normally called then this points to window
const arrow = () =>{
  console.log(this);
}

function normal(){
  console.log(this);
}

arrow()
normal()

obj.Sample()
obj.innerArrow()

const arr = [1,2,3,4,5]
arr.splice(1,1)
arr.splice(1,0,6);
console.log(arr);

arguments(1,2,3)

function arguments(a,b){
  console.log(a,b);
  console.log(arguments.length);
}
console.log("-------------------------------");
//////////////////////////cloning of obj////////////////


////////////////////assign ////////////////////
const original = {
  a: 1,
  b: 2,
  originalFun(){
    console.log("this is from original function");
  },
  innerOriginal: {
    innerA: 3,
    innerB: 4
  }
}

//using assign method to clone object dosen't actually clone the inner objects, inner objects in cloned object still point to same memory point to where original array inner object is point to 
const cloneUsingAssign = Object.assign({}, original)


cloneUsingAssign.innerOriginal.a = 10;
console.log(original.innerOriginal.a);
//below log prints 10 because we've used assign method which doesn't clone inner objects.
console.log(cloneUsingAssign.innerOriginal.a);

function change(){
  console.log("newly changed function");
}

cloneUsingAssign.originalFun = change;

original.originalFun();
cloneUsingAssign.originalFun();
 console.log("---------------------------------");

 ////////////////////////json.parse(json.stringify)


 //////can't access methods of object using parse because it doesn't copy methods.
const cloneUsingParse = JSON.parse(JSON.stringify(original))

// cloneUsingParse.originalFun = change;

// cloneUsingParse.originalFun();
console.log("-----------------------------------");

//////////////////////////////using structuredClone

//can't perform clone if original object has methods
// const cloneUsingStructured = structuredClone(original);

// console.log(cloneUsingParse);

let a = 10;
let b = 12;

[a,b] = [b,a]
console.log(a,b);
 

({a, b}= original);

console.log(a, b);

const arra = []

const objDes = {
  c:1,
  d:4
}
let c,d
{c:arra[0], d:arra[1]} = objDes;

console.log(arra);

///splitting string using ...spread operator
const st = "khyathi";
const nam = [...st];
console.log(nam);

