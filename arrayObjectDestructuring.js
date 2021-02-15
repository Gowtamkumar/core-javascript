// array
const number = [29, 23]
// const x = number[0];
// const y = number[1];
// console.log(x, y);
// array destructuring
const [x, y] = number;
//console.log(x, y);

function boxifx(num1){
    return [num1, num1 + 10]
}
const showFun = boxifx(6);
//console.log(showFun);

// function destructuring
const [disFun1, disFun2] = boxifx(6)
//console.log(disFun1, disFun2);


// Object
const products = { id: 01, name: 'Laptop', price: 20000 };
//console.log(products.name);

// Object destructuring
const {name, price}= { id: 01, name: 'Laptop', price: 20000 };
console.log(price);

// new array using three dots
const number1 = [29, 23]
number1.push(100);
const NewNumbers = [...number1, 25]
console.log(NewNumbers);
