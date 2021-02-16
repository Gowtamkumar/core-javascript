fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data))


const person = {
    name: 'Gowtam kumar',
    age: 27,
    gender: 'male',
    distric: 'Jashore'
};
// object to json convert
const convertJson = JSON.stringify(person);
//console.log(convertJson);
// json convert
const dataParsed = JSON.parse(convertJson);
//console.log(dataParsed.name);

// local storage
// basic local storage
localStorage.setItem('userId', 2981);
const userId = localStorage.getItem('userId');
console.log(userId);
// local storage object
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson);
// keys
const keys = Object.keys(parsedPerson);
console.log(keys);
// value
const value = Object.values(parsedPerson);
console.log(value);
