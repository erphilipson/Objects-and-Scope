/**************************************************************************************
ANSWER THE FOLLOWING QUESTIONS
**************************************************************************************



/**************************************************************************************
# 1
Warm up
Scope
- Study the code bellow and answer the following without checking the console.
- Are the variables what they claim to be?
- What would console.log(y) and console.log(x) print? Why?
- Write you answer bellow the code.
**************************************************************************************/
(function(){
  "use strict";

  var x = "I'm a local variable";
  //console.log(y)

  function scopeThis(){
    var y = "I'm a global variable";
    console.log(x);
  }
  scopeThis();
})();
/*************************************************************************************
------------ ANSWER -------------------
The variables are not what they claim to be.

console.log(y) would print undefined because y had not been previously defined.
console.log(x) would print "I'm a local variable" because it was defined as such above teh scopeThis function.
**************************************************************************************/




/*************************************************************************************
# 2
Warm up
Hoisting
- Study the code bellow and answer the following without checking the console.
- What would console.log(x) and console.log(y) print? Why?
- Write you answer bellow the code.
**************************************************************************************/
(function(){
  "use strict";

  function warmUp() {
    console.log(x);
    console.log(foo());

    var x = "variable hosting!";

    function foo() {
      return "function hoisting";
    }
  }
  warmUp();
})();
/*************************************************************************************
------------ ANSWER -------------------
console.log(x) would print undefined because x is defined below console.log(x)
There is no console.log(y) in the above example. If one were to include console.log(y) at any point, it would return an error since y is not present.

**************************************************************************************/





/**************************************************************************************
# 3
Warm up
Date Object
- Declare a variable 'todayIs'.
- Using the date constructor, it should print today's date.
**************************************************************************************/
// (function(testerOne){
//   "use strict";
//   //YOUR CODE HERE
//   console.assert(todayIs == today, "#3 Test failed. Did you set the date correctly?");
// })(testerOne);






/**************************************************************************************
# 4
Warm up
- Study the code below. What will console.log(add) (inside the IIFE and outside) print? Why? Write your answer below.
- Do not uncomment console.log(add);
**************************************************************************************/
(function() {
  "use strict";
  const add = 2 + 2;
  //console.log(add);
})();
//console.log(add);
/**************************************************************************************
------------ ANSWER -------------------
console.log(add) inside the IIFE will return 4 since it is inside the function
console.log(add) outside the IIFE will return an error because it is outside the function and there is no add variable in the global scope

**************************************************************************************/






/**************************************************************************************
# 5
Date object
Hoisting
- Set 'birthday' to an integer for April 21, 1983.
- There are a couple of hoisting issues in this exercise. Fix them to make the assertion pass.
**************************************************************************************/
(function(){
  "use strict";
  var birthday = "1983 4 21"
  var date = new Date(birthday);
  var bdayMsg = function(){
    return "You were born on " + date.toDateString();
  }
  bdayMsg();
  console.log("#5 bdayMsg()", bdayMsg());
  console.assert(bdayMsg() == "You were born on Thu Apr 21 1983", "#5 Test failed. Check function hoisting." )
})();





/**************************************************************************************
# 6
Date object
- Declare a variable: 'stringDate'.
- Set the value of 'stringDate' to be a string of today's date.
**************************************************************************************/
// (function(testerTwo){
//   "use strict";
//   var today = new Date();
//   console.log("#6 stringDate", stringDate)
//   console.assert(stringDate == testerTwo, "#6 Test Failed. Did you set stringDate correctly?")
// })(testerTwo);






/**************************************************************************************
# 7
Object notation
Hoisting
- Using dot notation, do the following:
  - add a property of "sauceType" with a value of "tomato".
  - add a property of "protein" with a value of "chicken".
  - add a propety of "orderNow" with a value of that would make it pass the assertion.
  - add a property of "sauce" with a value of that would make it pass the assertion.
- Fix hoisting issues
- It should return, "We are making your pizza with tomato and chicken. Pickup in 20 minutes.".
**************************************************************************************/
(function(){
  "use strict";

  var pizza = {
    sauce: "",
    orderNow: "",


    pizzaMkr: function(){
     pizza.sauceType = 'tomato';
     pizza.protein = 'chicken';
     pizza.orderNow = 1;
     pizza.sauce = 1;

      if (pizza.orderNow == true && pizza.sauce == true){
        return "We are making your pizza with " + this.sauceType + " and " + this.protein + ". Pickup in 20 minutes."
      }
      else {
        return "We only make traditional pizzas. You gotta add some sauce!"
      }
    }
}
  pizza.pizzaMkr();

  console.log("# 7 pizza.pizzaMrk()", pizza.pizzaMkr());
  console.assert(pizza.pizzaMkr() == "We are making your pizza with tomato and chicken. Pickup in 20 minutes.", "#7 Test failed. Did you add the propeties? Did you set the values correctly? Did you fix the hoisting issues?")
})();




/**************************************************************************************
# 8
Scope
Hoisting
Object notation
- Study the code below, line by line, carefully. Keep hoisting and scope in mind.
- Add the following properties to 'benefit' using bracket notation:
  - "credit" with a value of 50.
  - "discount" with a value of 5.
- Complete the missing return statement.
- 'name' must be set to 'James' as a local variable in one of the functions. It should also change the global variable in order for the assertion to pass.
-It should return: "Hello James. Here is the status of your account. Thank you for your loyalty. You've been a member for 18 months . You next bill will reflect a $50 credit and a 5% discount going forward."
HINTS:
- Don't be overwhelmed by the length of the function. Read the instructions carefully. Read it line by line, keeping hoisting and scope in mind. You've got this.
- First fix hoisting issues.
- One of the variables is missing something.
- Are the functions being called when they are supposed to?
**************************************************************************************/
(function() {
  "use strict";

  var goodStanding = true;
  var monthsActive = 18;

  //Do not modify 'name' globaly.
  var name = null;



  var benefit = {}
  //Add properties to 'benefit' using braket notation
  benefit['credit'] = 50;
  benefit['discount'] = 5;

  var accountCheck = function() {

    var greeting = function() {

      name = 'James';

      return "Hello " + name + ". Here is the status of your account."
    }

    function accountStat() {

      function offerDiscount() {

        return "Thank you for your loyalty. You've been a member for " + monthsActive + " " + "months . You next bill will reflect a $" + benefit.credit + " credit and a " + benefit.discount + "% discount going forward.";
      }

      if (goodStanding == true && monthsActive >= 12) {

        return offerDiscount(name);

      } else if (goodStanding == false) {

        return "Please make a payment within 7 days or your service will be terminated, forever."

      } else if (monthsActive <= 12) {

        var timeFrame = 12 - monthsActive;
        var months;

        if (timeFrame == 1) {

          months = "month";
        } else {

          months = "months"
        }

        return "You are " + timeFrame + " " + months + " from getting a special discount!"
      }


    }
    return greeting() + " " + accountStat();
    //Here 'accountCheck' should return both the 'greeting' output and the 'accountStat' output.
  }

  console.log("#8 accountCheck():", accountCheck());
  console.assert(name == "James", "Test failed. You should set 'name' to 'james' from within accountCheck()");
  console.assert(accountCheck() == "Hello James. Here is the status of your account. Thank you for your loyalty. You've been a member for 18 months . You next bill will reflect a $50 credit and a 5% discount going forward.", "Test failed. It returned: " + accountCheck());

})();





/*************************************************************************************
# 9
Compartmentalization
- Fix the Compartmentalization issue in order to make the assertion pass.
**************************************************************************************/
(function() {
  "use strict";


  function duplicate() {
    multiply = 2 * 10;
  };

  duplicate();

  var multiply = 2 * 8;

  console.log( "multiply", multiply );
  console.assert( multiply == 16, "Test failed. How can we isolate duplication()" );
})();
