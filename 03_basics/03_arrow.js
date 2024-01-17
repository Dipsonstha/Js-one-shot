//This keyword
//Used to refere current context

const userDetail = {
  userName: "CRF300",
  price: 2100000,
  category: "DualSport",
  review: function () {
    console.log(
      //to refere current context variable we should use this
      `${this.userName}, is ${this.category} bike with price of ${this.price}`
    );
    //this basically shows about the current variables
    console.log(this);
  },
};
//calling review() from userDetails
// userDetail.review(); //Function before changing
// userDetail.userName = "rally300";
// userDetail.review(); //Function afer changing

//In node global scope {this} returns empty {} object
/******** console.log(this);*/

//////////////////////////////////////////////////////////
function one() {
  const name = "honda";
  console.log(this); //inside function gets multiple value not like in global context
  //undefine
  //can only access in objects
  console.log(this.name); //this. keyword can only access in context type not in function
}
//one();

const arrow = () => {
  console.log(this); //but this returns {}object
};
// arrow();

/**********************************************/
//Arrow Function

const addOne = (num1, num2) => {
  return num1 + num2; //explicite return
};
/*
if {} we should use return keyword
because if there are no return keyword then it will return undefined by default 
if () or single line execution no need of return keyword
*/

// console.log(addOne(2, 3));
// const addTwo = (num1, num2) => (num1 + num2); //implicit return
// console.log(addTwo(22, 1));
//return object should require wrapping in ()parenthesis
const object = () => ({ userName: "Implicit Arrow Function" }); //important while using react
console.log(object());
