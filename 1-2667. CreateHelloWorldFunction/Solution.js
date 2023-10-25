




var createHelloWorld = function() {
    
    return function(){
        return "Hello World";
    }
};


const f = createHelloWorld();
f();


// OR Arrow Syntax

var createHelloWorld = function() {
    
    return ()=> "Hello World";
    
};


//Arrow Syntax + Rest Arguments

var createHelloWorld = function() {
    
    return (...args)=> "Hello World";
    
};