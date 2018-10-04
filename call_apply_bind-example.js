//lecture on bind call and apply
//instantiate an object
const john = {
    name: "John",
    age: 26,
    job: "Teacher",
    //function expression
    presentation: function(style, timeOfDay) {
        if (style === "formal") {
            console.log("Good " + timeOfDay + ", Ladies and Gentlemen! I\'m " + 
            this.name + ", I\'m a " +
            this.job + " and I\'m " +
            this.age + " years old.");
        } else if (style === "friendly") {
            console.log("Hey! What\'s up? I\'m " + this.name + ", I\'m a " + this.job + " and I\'m " + this.age + " years old. Have a nice " + 
            timeOfDay + ".");
        }
    }
}
let emily = {
    name: "Emily",
    age: 35,
    job: "designer"
};

//this is how you call the method
john.presentation("formal","morning");

//this is a call method
//this is call method borrowing. we use the method set to john to use on emily object
//'this' variable in the function above is now referring to "Emily"
john.presentation.call(emily, "friendly", "afternoon");

//this is the apply method
//this is the same as the call method except we are passing an array. we use the method set to john to use on emily object
//'this' variable in the function above is now referring to "Emily"
//john.presentation.apply(emily,["friend","afternoon"]);
//this is not going to work because our function doesn't expect to receive an array.

//bind method
//similar to call method but bind doesn't immediately call the function
//but instead generate a copy of the function. so we can store it somewhere.
//useful with pre-set arguments
//carrying = is a technique in which we create a function based on another function with pre-set parameters.
var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("afternoon");