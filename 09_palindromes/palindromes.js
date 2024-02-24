const palindromes = function (string) {
  let regex = /[\W_]/g;
  let lowerCaseString = string.toLowerCase().replace(regex, "");
  let reversedString = lowerCaseString.split("").reverse().join("");

  return lowerCaseString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
