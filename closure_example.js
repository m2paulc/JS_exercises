// This is an example of closure
// an inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.


function interviewQuestion(job) {
    return function(name) {
        if (job === "designer") {
            var q = name + " can you please explain what UX design is?";
        } else if (job === "teacher") {
            var q = "What subject do you teach " + name + "?";
        } else {
            var q = "What do you do " + name + "?";
        }
        console.log(q);
    }
}

//this is one way of calling the function 
let john = interviewQuestion("teacher");
john("John");
let jane = interviewQuestion("designer");
jane("Jane");

//this is a better way of calling the function
interviewQuestion("Driver")("Howard");