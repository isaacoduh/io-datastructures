/**
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
 * Input: s = "cbaebabacd", p = "abc"
    Output: [0,6]
    Explanation:
    The substring with start index = 0 is "cba", which is an anagram of "abc".
    The substring with start index = 6 is "bac", which is an anagram of "abc".
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const m = s.length;
  const n = p.length;

  const ans = [];
  if (m < n) {
    return ans;
  }
  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);

  const idx = (c) => c.charCodeAt(0) - "a".charCodeAt(0);
  for (const c of p) {
    ++count1[idx(c)];
  }
  for (const c of s.slice(0, n - 1)) {
    ++count2[idx(c)];
  }
  for (let i = n - 1; i < m; ++i) {
    ++count2[idx(s[i])];
    if (count1.toString() === count2.toString()) {
      ans.push(i - n + 1);
    }
    --count2[idx(s[i - n + 1])];
  }
  return ans;
};
