function getTaskDetails(task){
    const {
        id=0,
        title = "Untitled Task",
        assignee: {
            name = "Unassigned",
            profile: {
                email = "No email"
            } = {}
        } = {}
    } = task; 

    return {
        id,
        title,
        name,
        email
    };

}

// Task with complete data 
const task1 = {
    id: 101,
    title: "Fix login bug",
    assignee: {
        name: "Alice",
        profile: {
            email: "alice@example.com"
        }
    }
};


//Task with missing assignee
const task2 = {
    id: 102,
    title: "Create Dashboard"
};

//Task with missing profile
const task3 = {
    id: 103,
    title: "Update API",
    assignee: {
        name: "Bob"
    }
};

console.log(getTaskDetails(task1));
console.log(getTaskDetails(task2));
console.log(getTaskDetails(task3));

