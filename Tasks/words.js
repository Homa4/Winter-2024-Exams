// Count words in a string
//1.rename function and variables
//2.delete checking if flag true in (if) condition 
const wordsCounter = function (enterStr) {
  let numberOfWords = 0;
  let flag = false;
  for (const elem of enterStr) {
    if (!flag) {
      if (elem === ' ') {
        if (flag) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag) {
          flag = true;
        } else {
          flag = true;
        }
        number_of_words_in_s++;
      }
    } else {
      if (elem === ' ') {
        if (flag) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag) {
          flag = true;
        } else {
          flag = true;
        }
      }
    }
  }
  return wordsCounter;
};

module.exports = Words;
