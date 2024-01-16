// Get month number
//1. rename function and variables also 
//2.relocate (arrMonth) in function
//3.delete variable with array length
//removed array from function
const arrMonths = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

const getMonthNumber = (monthNameStr) => {
  const littleArr = monthNameStr.toLowerCase()
  for (let i = 0; i < arrMonths.length; i++) {
    if (littleArr.startsWith(arrMonths[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
