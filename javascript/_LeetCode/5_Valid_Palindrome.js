/** Two Pointers, String */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (!/[a-zA-Z0-9]/.test(s[i])) {
      ++i;
    } else if (!/[a-zA-Z0-9]/.test(s[j])) {
      --j;
    } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    } else {
      ++i;
      --j;
    }
  }
  return true;
};

console.log(isPalindrome("race a car"));

/**
 * Two pointer:
 * use two pointers i and j to point to the ends of the string s, then loop through the following process until i >= j;
 * if s[i] is not a letter or a number, move the pointer i one step to the right and continue to the next loop.
 * if s[j] is not a letter or a number, move the pointer j one step to the left and continue to the next loop.
 * if the lowercase form of s[i] and s[j] are not equal, return false.
 * Otherwise, move the pointer i one step to the right and the point j one step to the left, and continue to the next loop.
 * at the end return 'true'
 * t = o(n), n is length of string
 * s = O(1)
 */
