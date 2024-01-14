// Filter array by type name
//1.change function name , change variables name variables name
const filterArrayByTypeName = (array, typeName) => {
  let removeElem = [];
  for (const elem of array) {
    const index = array.indexOf(elem);
    if (typeof elem !== typeName) {
      removeElem.unshift(index);
    }
  }
  
  for (const elem of removeElem){
    array.splice(elem, 1)
  };
  return array;
};

module.exports = filterArrayByTypeName;
