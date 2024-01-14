// Count words in a string
//1.rename function and variables
//2.delete checking if flag true in (if) condition 
//3.delete useless (else) in construction (if(){}ele{})
//4.delete useless (if) in construction (if(){}ele{})
const wordsCounter = function (enterStr) {
  let numberOfWords = 0;
  let flag = false;
  for (const elem of enterStr) {
    if (!flag) {
      if (elem === ' ') {
        flag = false;
      } else {
        flag = true;
         numberOfWords++;
      }
    } else {
      if (elem === ' ') {
        flag = false;
      } else {
        flag = true;
      }
    }
  }
  return  numberOfWords;
};

module.exports = wordsCounter;
