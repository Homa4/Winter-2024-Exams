// Generate random password
//1.name of function and variable was changed
const generatePassword = (alphabet, length) => {
  const maxPasswLen = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * maxPasswLen);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
