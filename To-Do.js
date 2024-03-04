function calculateRectangleArea(length, width) {
    return length * width;
}

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("John");

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let person = {
    name: "Alice",
    age: 30,
    profession: "Engineer"
};

console.log(person.name);

function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(5, 3);
console.log("The sum is: " + sum);

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

let result = checkEvenOrOdd(7);
console.log("The number is " + result);
