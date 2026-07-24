function generateTaskSummary(taskId, title, dueInDays){
    return `Task #${taskId}: ${title} - due in ${dueInDays} days`; 
}

const summary = generateTaskSummary(12, "Fix login bug", 3); 

console.log(summary); 