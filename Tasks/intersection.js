// Find an intersection of two dictionaries
// 1.delete all unnecessary brackets
//2.rename name of function and variables
//3.change logic , delete else and change if condition and execution unit
function intersectionOfTwoDictionaries(firstObject,secondObject) {
  const keys = Object.keys(firstObject);

  for (const elem of keys) {
    if (firstObject[elem] != secondObject[elem]) {
      delete firstObject[elem];
    } 
  }
  return firstObject;
};

module.exports = intersectionOfTwoDictionaries;
