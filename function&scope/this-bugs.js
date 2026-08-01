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
const callback = taskBoard.showName; //only saved function...not the object ->> no "this"

try {
    callback(); // 'this' is lost as only function was saved...
} catch (error) {
    console.log(error.message);
}


// Fix using bind()
const fixedCallback = taskBoard.showName.bind(taskBoard); //binded object also with funciton.. ->> "this" works...

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