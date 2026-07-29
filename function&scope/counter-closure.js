function createCounter(start = 0){
    let count = start;

    return {
        increment(){
            count ++;
            return count; 
        }, 
        decrement(){
            count --;
            return count;
        }, 

        getValue(){
            return count; 
        }
    }; 
}



const counterA = createCounter(); //0

const counterB = createCounter(100); //100

console.log(counterA.increment()); //1
console.log(counterA.increment()); //2
console.log(counterA.getValue()); //2

console.log(counterB.increment());//101
console.log(counterB.increment());//102
console.log(counterB.getValue());//102