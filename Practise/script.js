let a = 10;


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