function reverseString(str) {
  // create an empty stack
  const stack = [];

  // push each  character of the string unto the stack
  for (let char of str) {
    stack.push(char);
  }

  // initialize an empty string to store the reversed string
  let reversedStr = "";

  // pop characters from the stack and build the reversed string
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }

  // return the reversed string
  return reversedStr;
}

const originalString = "hello world";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: dlrow olleh
