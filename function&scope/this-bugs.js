// -------------------------
// BUG 1: Regular Method Losing this
// -------------------------

const taskBoard = {
    name: "ProjectFlow Board",

    showName() {
        console.log(this.name);
    }
};

// Method reference is copied into a standalone variable
const callback = taskBoard.showName;

try {
    callback(); // 'this' is lost
} catch (error) {
    console.log(error.message);
}


// Fix using bind()
const fixedCallback = taskBoard.showName.bind(taskBoard);

fixedCallback();


// -------------------------
// BUG 2: Arrow Function as Object Method
// -------------------------

const user = {

    name: "Alice",

    greet: () => {
        console.log(this.name);
    }

};

user.greet();


// Fix by using a regular method
const fixedUser = {

    name: "Alice",

    greet() {
        console.log(this.name);
    }

};

fixedUser.greet();