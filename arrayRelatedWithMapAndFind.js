// Array Opject
const products = [
    { id: 01, name: 'Laptop', price: 20000 },
    { id: 02, name: 'Phone', price: 10000 },
    { id: 03, name: 'Watch', price: 250 }
];

// map
// This auto return
const ProductName = products.map(product => product.name);
//console.log("Product name: ", ProductName);

// need to return if you don,t return then don,t working
const ProductPrice = products.map(product => {
    return product.price
});
//console.log("Product Age: ", ProductPrice);

const allproduct = products.map(product => product);
//console.log("All Products :", allproduct);

// filter if you want filter product then you can use filter function
const ShowFilterResult = products.filter(productFilter => productFilter.price < 300);
//console.log("Products filter: ", ShowFilterResult);

// remove an item using filter
const remaining = products.filter(product => product.id != 3);
//console.log(remaining);

// find an item use find
const SearchFind  = products.find(product => product.name === 'Laptop');
console.log(SearchFind);

// more need 
// reduce
// includes
// indexOf
