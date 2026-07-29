function memoize(fn){
    const cache = {};

    return function(...args){
        const key = JSON.stringify(args); 

        if (cache[key]){
            console.log("Cache Hit"); 
            return cache[key]; 
        }

        console.log("Calculating..."); 

        const result = fn(...args); 

        cache[key] =  result; 

        return result; 

    }; 
}

function sortTasks(tasks){
    return [...tasks].sort(); 
}

const memoizedSort = memoize(sortTasks);

console.log(
    memoizedSort(["task3", "task1", "task2"])
);

console.log(
    memoizedSort(["task3", "task1", "task2"])
);

console.log(
    memoizedSort(["task5", "task4"])
);