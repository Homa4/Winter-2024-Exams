// Count words in a string
//1.rename function and variables
//2.delete checking if flag true in (if) condition 
//3.delete useless (else) in construction (if(){}ele{})
//4.delete useless (if) in construction (if(){}ele{})
//5.to improve function we will use methods .delete (let flag) and all loop
//6. check if string empty
//7.using else write (const arrOfWords) fill it with array of words and count length of array
const wordsCounter = function (enterStr) {
  let numberOfWords;
  if(enterStr === ''){
    numberOfWords = 0;
  } else {
    const arrOfWords = enterStr.split(' ');
    numberOfWords = arrOfWords.length;
  }
  
  return  numberOfWords;
};

module.exports = wordsCounter;
