//Review
// syntax of the function

function f(a, b) {
    //Basic Syntax
    const sum = a + b;
    return sum;
  }
  console.log(f(10, 2));
  
  //OR
  
  var f = function (a, b) {
    //Anonymous Function
    const sum = a + b;
    return sum;
  };
  console.log(f(10, 2));
  
  //Immediately Invoked Function Expression (IIFE)
  
  const result = (function (a, b) {
    const sum = a + b;
    return sum;
  })(3, 4);
  console.log(result); // 7
  
  //Functions Within Functions
  
  function createFunction() {
    function f(a, b) {
      const sum = a + b;
      return sum;
    }
    return f;
  }
  const f = createFunction();
  console.log(f(5, 6)); // 11
  
  //Closures
  
  function createAdder(a) {
    function f(b) {
      const sum = a + b;
      return sum;
    }
    return f;
  }
  const f = createAdder(3);
  console.log(f(4)); // 7
  
  //Arrow Syntax
  
  const f = (a, b) => {
    //Basic Syntax
    const sum = a + b;
    return sum;
  };
  console.log(f(3, 4)); // 7
  
  const f = (a, b) => a + b; //Omit Return
  console.log(f(3, 4)); // 7
  
  // Rest Arguments: access all the passed arguments as an array
  
  function f(...args) {
    const sum = args[0] + args[1];
    return sum;
  }
  console.log(f(3, 4)); // 7
  
  //an example
  
  function log(inputFunction) {
    return function (...args) {
      console.log("Input", args);
      const result = inputFunction(...args);
      console.log("Output", result);
      return result;
    };
  }
  const f = log((a, b) => a + b);
  f(1, 2); // Logs: Input [1, 2] Output 3
  