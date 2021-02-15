let number = 20;
number = 10;
console.log(number);

const name = 'Gowtam kumar';
console.log("name: ", name);

// boolean true false
const Confident = false;
console.log(Confident);

// Object
const person = {
    name: 'Poly Paul',
    age: 33,
    city: 'Jashore'
}
// template js
const ResultByTemplate = `My name is  ${name} my Wife name is ${person.name}`;
console.log("template: ", ResultByTemplate);
// condition if else

let numberForCondition = 20;
if (numberForCondition > 10) {
    console.log('this is ture');
} else if (numberForCondition >= 20) {
    console.log('this is false');
}


// array
const numbers = [23, 33, 43];
const respected = ['Mother', 'Father']
// array in object

const products = [{ name: 'Gowtam kumar', age: 26 }, { name: 'Rahul', age: 29 }, { name: 'Poly', age: 29 }]
// For loop
for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(element);

}

// function and arrow function

function add(num1, num2) {
    let result = num1 + num2;
    return result * 2;
}
const funResult = add(10, 5);
console.log("Function Resutl: ", funResult);

// arrow function

const fiveTime = num => num * 3;
const add2 = (num1, num2) => num1 + num2;
const doMath = (x,y) => {
    const sum = x + y;
    return sum * 2;
}

