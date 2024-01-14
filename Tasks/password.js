// Generate random password
//1.name of function and variable was changed
//2.bring (const index) out of the loop
// write ( key = key + alphabet[index];) as ( key += alphabet[index];)
const generatePassword = (alphabet, length) => {
  const maxPasswLen = alphabet.length;
  let key = '';
  const index = Math.floor(Math.random() * maxPasswLen);
  for (let i = 0; i < length; i++) {
    key += alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
