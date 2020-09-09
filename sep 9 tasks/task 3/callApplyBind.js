var obj = { name: "Divya" };

var welcomeGreetings = function (a, b, c) {
    return "Welcome " + this.name + " to " + a + " " + b + " in " + c;
};

//using call();

console.log(welcomeGreetings.call(obj, 'Newtown', 'Hyderabad', 'Telangana'));

// using apply();
var arr = ['Newtown', 'Hyderabad', 'Telangana'];
console.log(welcomeGreetings.apply(obj, arr));

//using bind();
var bound = welcomeGreetings.bind(obj);
//bound is function
console.log(bound('NewTown', 'Hyderabad', 'Telangana'));