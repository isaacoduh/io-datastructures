/** Hash Table, String, Sorting */

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    ++cnt[s.charCodeAt(i) - "a".charCodeAt(0)];
    --cnt[t.charCodeAt(i) - "a".charCodeAt(0)];
  }
  return cnt.every((x) => x === 0);
};

/***
 * Solution:
 * first determine that lengths of the two strings are equal. if they are not, the characters of the two strings must be different, so return false.
 *
 * Otherwise, use a hash table or an array of length 26 to record the number of times each character appears in string s. and then traverse the other
 * string t. Each time we traverse the character, substract the number of times the corresponding character appears in the hash table by 1.
 * If the number of times after subtraction is less than 0, the number of times the character appears in the two strings is different, return false.
 * If after trversing the two strings, the character counts in the has table are 0, it means the characters in the strings appear the same number of times, return true.
 *
 * t = O(n)
 * s = O(c).... n is the length of the string, C is the size of the character set, which C = 26
 *
 */
