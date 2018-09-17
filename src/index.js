module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = bracketsConfig.reduce((ret, item) => {
    ret[item[0]] = item[1];
    return ret;
  }, {});
  const closedBrackets = bracketsConfig.reduce((ret, item) => {
    ret[item[1]] = item[0];
    return ret;
  }, {});
  for (letter of str) {
    if (stack.length == 0) {
      if (!openBrackets.hasOwnProperty(letter)) return false;
      stack.push(letter);
      continue;
    }
    if (closedBrackets.hasOwnProperty(letter)) {
      if (closedBrackets[letter] == stack[stack.length - 1]) {
        stack.pop();
        continue;
      }
      if (!openBrackets.hasOwnProperty(letter)) return false;
      stack.push(letter);
      continue;
    }
    if (!openBrackets.hasOwnProperty(letter)) return false;
    stack.push(letter);
  }
  return stack.length == 0;
};
