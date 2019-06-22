// Doubling of number

let number = [1,2,3,4]
let newNumber = []

function checkOdd (number)
{
           return number %2 != 0;
}

newNumber = number.filter(checkOdd).map(element => element*2);

console.log(newNumber);



//with Chaining
// let newNumber = number.filter(num => num%2 !=0).map(el => el * 2);

