//function declaration 
greetDeclaration(); 

function greetDeclaration(){
    console.log("Function Declaration Executed");
}


//function expression 
try{
    greetExpression();
} 
catch (error){
    console.log(error.message)
}; 

const greetExpression = function(){
    console.log("Function Expression Executed"); 
}; 


// arrow function 
try{
    greetArrow();
} catch (error){
    console.log(error.message)
};

const greetArrow = ()=> {
    console.log("Arrow Function Executed")
}


// Calling after definition
greetExpression();
greetArrow();


