// Sum all numbers from an array
//1.delete old code
//2.create new 
//3.create arrow function
//4.create variable (sumOfNumbers) which will get result
//5.take array (arr) using method chain call (.filter()) array from to get array of numbers then (.reduce()) to sum all numbers from an array and get result 

const counterOfArrayNumbers = (arr) => {
  let sumOfNumbers = arr.filter(elem => typeof elem === 'number').reduce((accum, elem) => accum + elem, 0);
  return sumOfNumbers;
}


module.exports = counterOfArrayNumbers;
