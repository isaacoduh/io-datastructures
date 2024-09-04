/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  const ss = new Set();
  for (let i = 0, j = 0; j < s.length; ++j) {
    while (ss.has(s[j])) {
      ss.delete(s[i++]);
    }
    ss.add(s[j]);
    ans = Math.max(ans, j - i + 1);
  }
  return ans;
};

/**
 * Solution: Hashtable:
 * define a hash table to record the characters in the current window. Let i and j represent the start and end poisitions of the non-repeating substring, respectively. The length of the longest non repeating substring is
 * recorded as ans.
 *
 * for each character s[j] in the string s, we call it c. if c exists in the window s[i...j -1], we move i to the right until s[i...j - 1] does not contain c. Then we add c to the hash table. At this time,
 * the window s[i..j] does not contain repeated elements, and we update maxiumum value of ans.
 *
 * finally return ans.
 *
 * The time complexity is O(n), where n represents the length of the string s.
 *
 */
