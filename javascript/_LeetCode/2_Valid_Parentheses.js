/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

var isValid = function (s) {
  const stack = [];
  const brackets = { "(": ")", "[": "]", "{": "}" };
  for (char of s) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      // if it is a closing bracket check if it matches the top of the stack
      const top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"));
