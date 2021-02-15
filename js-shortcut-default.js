let money = 200;
let food;
if (money > 100) {
    food = 'Eating Biryani'
} else {
    food = 'Alur ar dim'
}

// short condition/ Ternary 
let food2 = money > 100 ? 'Eating Biryani' : 'Alur ar dim';

const active = false;
let cssClass;
if (active === true) {
    cssClass = 'active';
} else {
    cssClass = 'inactive';
}

const cssClass2 = active ? 'active': 'inactive';
// for function
//const cssClass = active ? displayUser() : hideUser();

const x = active && 5;
const y = active || 5;
//console.log(y);
// string to number convert just string before + oparetor add.
const number = +"50"
console.log(number);
// number to String convert
const numText = 50 + '';
console.log(numText);

// default parameter   for function if you num2 value don,t add then default parameter working.
function add(num1, num2 = 10){
    return num1 + num2;

}
add(20,10);
