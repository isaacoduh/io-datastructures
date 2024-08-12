const isValidParenthesis = (str) => {
  // use a stack to store opening brackets
  const stack = [];

  // map opening brackets to their closing brackets
  const brackets = { "{": "}", "[": "]", "(": ")" };

  // loop through each character in the string
  for (let char of str) {
    // if it is an opening bracket, push it to the stack
    if (brackets[char]) {
      stack.push(char);
    } else {
      // if is a closing bracket, check if it matches the top of the stack
      const top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }

  // after iterating, check if the stack is empty (all brackets were matched!)
  return stack.length === 0;
};

console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("(")); // false
