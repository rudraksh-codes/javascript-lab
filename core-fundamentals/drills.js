function compareValues(a, b){
    console.log(`comparing ${a} and ${b}`);
    console.log(`== : ${a==b}`)
    console.log(`=== : ${a===b}`)
}

//test cases 
compareValues([], false)
compareValues([], 0)
compareValues([], "")
compareValues([1], "1")
compareValues("", 0)
compareValues("0", 0)
compareValues(false, 0)
compareValues(true, 1)
compareValues(null, undefined)
compareValues(null, 0)
compareValues(undefined, 0)
compareValues(NaN, NaN)
compareValues("5", 5)
compareValues(5, "5")
compareValues({}, {})
compareValues([], [])








const employee = {
};

function extractDetails(employee){
    const {
        id = 0, 
        profile: {
            name = "unassigned",
            contact : {
                email = "no email"
            } = {}
        } = {}
    } = employee; 

    return {
        id,
        name,
        email
    };
}

extractDetails(employee);




//optional chaining 
function getAvatar(user){
    return user?.profile?.avatar ?? "default-avatar.png"
}

const user1 = {
    profile: {
        avatar: "rudra.png"
    }
}

const avatar = getAvatar(user1) 
console.log(avatar)



//spread, rest 
const defaults = {
    theme: "light", 
    language: "en"
}

const user = {
    theme: "dark"
}

const final = {
    ...defaults, 
    ...user,
    notifications: true
}

console.log(defaults)
console.log(user)
console.log(final)


//rest 
function sum(...nums){
    s = 0
    for(let i of nums){
        s = s + i; 
    }
    return s ; 
}
console.log(sum(3, 5, 33, 532, 5325, 3))




function multiply(...nums){
    m = 1
    for (let i of nums){
        m = m * i
    }
    return m ; 
}
console.log(multiply(2, 3, 5))



function printNames(...names){
    for (let name of names){
        console.log(name, "\n");
    }
}
printNames("rudra", "surya", "mnni", "gudu");




function createTask(title, ...tags){
    return {
        title, 
        ...tags
    }
}
console.log(createTask("make API", "#fastapi", "#python", "#react", "#postgreSQL"))



function findMax(...nums){
    var mx = nums[0]; 
    for(let i of nums){
        if (mx < i ){
            mx = i
        }
    }
    return mx  
}
findMax(567,6778,87654,233,5);











