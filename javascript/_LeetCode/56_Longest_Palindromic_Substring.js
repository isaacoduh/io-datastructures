/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  const f = Array(n)
    .fill(0)
    .map(() => Array(n).fill(true));
  let k = 0;
  let mx = 1;
  for (let i = n - 2; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      f[i][j] = false;
      if (s[i] === s[j]) {
        f[i][j] = f[i + 1][j - 1];
        if (f[i][j] && mx < j - i + 1) {
          mx = j - i + 1;
          k = i;
        }
      }
    }
  }
  return s.slice(k, k + mx);
};

/**
 * Solution: Dynamic Programming
 *
 * define f[i][j] to represent whether the string s[i..j] is a palindrome, initially f[i][j] = true.
 * next, we define variable k and mx, where k represents the starting position of the longest palindrome, and mx represents the length of the longest
 * palindrome. Initially, k = 0, mx = 1.
 *
 * Considering f[i][j], if s[i] = s[j], then f[i][j] = f[i + 1][j + 1]; otherwise, f[i][j] = false. if f[i][j] = true, and mx < j - i + 1, then we update
 * k = i, mx = j - i + 1.
 *
 * since f[i][j] depends on f[i + 1][j-1], we ensure that i + 1 is before j - 1, so we need to enumerate i from large to small, and enumerate j from small to large.
 * The time complexity is O(n^2), and the space complexity is O(n^2). Here n, is the length of string s.
 */
