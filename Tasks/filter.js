// Filter array by type name
//1.change function name , change variables name variables name
//2.change plice of const index now it doesn`t create on each iteraton of loop
const filterArrayByTypeName = (array, typeName) => {
  let removeElem = [];
  for (const elem of array) {
    if (typeof elem !== typeName) {
      const index = array.indexOf(elem);
      removeElem.unshift(index);
    }
  }
  
  for (const elem of removeElem){
    array.splice(elem, 1)
  };
  return array;
};

module.exports = filterArrayByTypeName;
