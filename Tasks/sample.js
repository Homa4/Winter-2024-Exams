// Get one random element from an array
//1.change function name
const sample = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = sample;
