// Find an intersection of two dictionaries
// 1.delete all unnecessary brackets
//2.rename name of function and variables
function intersectionOfTwoDictionaries(firstObject,secondObject) {
  const keys = Object.keys(firstObject);

  for (const elem of keys) {
    if (firstObject[elem] === secondObject[elem]) {
      secondObject[elem] = firstObject[elem];
    } else {
      delete firstObject[elem];
    }
  }
  return firstObject;
};

module.exports = intersectionOfTwoDictionaries;
