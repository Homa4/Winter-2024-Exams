// Get one random element from an array
//1.change function name
//2.delete (arr = arr[Math.floor(Math.random() * arr.length)];) 
//instead (return arr[Math.floor(Math.random() * arr.length)];)
const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];  
};

module.exports = sample;
