function getAvatar(task){
    const avatar =
    task?.assignee?.profile?.avatarUrl??
    "default-avatar.png";

    return avatar
}

const task1 = {
    assignee: {
        profile: {
            avatarUrl:"alice.png"
        }
    }
};

const task2 = {
    assignee: {}
}

console.log(getAvatar(task1))
console.log(getAvatar(task2))