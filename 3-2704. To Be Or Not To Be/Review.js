//JavaScript Objects and Function Returns

/**
 * In JavaScript, functions can return objects, which are collections of related data and functions, 
 * often known as properties and methods.
 */

function createPerson(name, age){

    return{
        name: name,
        age: age,
        greeting: function(){
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
                }
                    };
    }


    let person = createPerson("Mahdis", 22);
    person.greeting();
    


//JavaScript Objects and Limited Method Chaining

/**Full method chaining is a common pattern in JavaScript that permits multiple methods to be
 *  invoked in a single statement. This pattern is implemented when each method returns an 
 * object, which could be the original object (for mutable objects) or a new object 
 * (for immutable objects). Full method chaining enhances readability and conciseness 
 * of the code and is a preferred pattern in many JavaScript libraries. */

let arr = [5, 2, 8, 1];

let result = arr.sort().reverse().join("-");

console.log(result); // "8-5-2-1"


//JavaScript Error Handling


//1-Throwing a string:

function checkName(name){
    if(name === ''){
        throw 'Error: Name cannot be empty';
    } 
    else {
       return true;
   }
}

try {
    console.log(checkName(''));
    }
    catch(error){
        console.error(error);
    }


//2-Throwing an Error instance:

function divide(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return numerator / denominator;
  }
  
  try {
    console.log(divide(5, 0));
  } catch (error) {
    console.error(error.message); // "Cannot divide by zero!"
  }


//3-Throwing an Aggregated Error:

let error1 = new Error("First Error");
let error2 = new Error("Second Error");

try {
  throw new AggregateError([error1, error2], "Two errors occurred.");
} catch (error) {
  if (error instanceof AggregateError) {
    console.error(error.message); // "Two errors occurred."
    for (let e of error.errors) {
      console.error(e.message); // logs "First Error" then "Second Error"
    }
  }
}

// has review explanation tips on the site 