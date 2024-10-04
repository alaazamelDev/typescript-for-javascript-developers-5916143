function add(x, y) {
    return x + y;
}
var sum = add(2, 3); // Valid call
// const result = add(2, "3");  // Compile-time error 
var multiply = function (a, b) {
    return a * b;
};
var product = multiply(4, 5); // Valid call
// const productError = multiply(4, "5");  // Compile-time error 
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greet("Yasmina")); // Outputs: Hello, Yasmina!
console.log(greet("Yasmina", "Hi")); // Outputs: Hi, Yasmina! 
function greetOptional(name, greeting) {
    return "".concat(greeting || "Hello", ", ").concat(name, "!");
}
console.log(greetOptional("Bob")); // Outputs: Hello, Bob! 
console.log(greetOptional("Bob", "Hi")); // Outputs: Hi, Bob! 
function greetWithReturnType(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    console.log("".concat(greeting, ", ").concat(name, "!"));
}
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Outputs: 10 
var addOperation = function (a, b) { return a + b; };
var subtractOperation = function (a, b) { return a - b; };
console.log(addOperation(10, 5)); // Outputs: 15
console.log(subtractOperation(10, 5)); // Outputs: 5
