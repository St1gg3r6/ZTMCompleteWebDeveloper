//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const add = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
31

//Currying: What does the last line return?
const sum2 = (a, b) => a + b
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1_f = (num) => num + 1;
const add5_g = (num) => num + 5;
compose(add1_f, add5_g)(10)
16

//What are the two elements of a pure function?
// Avoiding side effects.
// Deterministic: always produces the same results given the same inputs.