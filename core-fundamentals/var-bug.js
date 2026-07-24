// incorrect version (var) [function scoped]
for (var i=1; i<=5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}

//fixed version (let) [block scoped]
for (let j=1; j<=5; j++){
    setTimeout(function(){
        console.log(j); 
    }, 1000);
}


// fixed without let
for (var i=1; i<=5; i++){
    (function(currentValue){
        setTimeout(function(){
        console.log(currentValue);
    }, 1000);
    })(i);    
}