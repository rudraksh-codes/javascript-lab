//Spread-Expand 
const defaultConfig = {
    theme: "light",
    notifications: true
}; 

const userConfig = {
    theme: "dark",
    autoSave: true
}

//Merge using spread
const mergedConfig = {
    ...defaultConfig,
    ...userConfig
}

console.log("Default Config:", defaultConfig);
console.log("User Config:", userConfig);
console.log("Merged Config:", mergedConfig);





//Rest-Collect
function addTaskTags(...tags){
    console.log("Task Tags:", tags);
}

addTaskTags("bug", "frontend", "urgent")


