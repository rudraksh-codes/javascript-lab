function compareValues(value1, value2){
    console.log(`comparing: ${value1} and ${value2}`);
    console.log(`== : ${value1 == value2}`);
    console.log(`=== : ${value1 === value2}`);
}

// test cases
compareValues([], false);
compareValues("", 0);
compareValues(null, undefined);
compareValues(null, 0)
compareValues(undefined, 0)

// loose equality operator "==" performs type coercion while strict equality doesen't "==="




