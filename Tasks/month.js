// Get month number
//1. rename function and variables also 
const arrMonths = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthNumber = (monthNameStr) => {
  const lengthOfArrMonth = arrMonths.length;
  for (let i = 0; i < lengthOfArrMonth; i++) {
    if (monthNameStr.toLowerCase().startsWith(arrMonths[i])) return i + 1;
  }
  return -1;
};

module.exports = Month;
