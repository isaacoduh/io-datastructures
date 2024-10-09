/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  const answer = [];
  const t = [];
  const d = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const dfs = (i) => {
    if (i >= digits.length) {
      answer.push(t.join(""));
      return;
    }
    const s = d[+digits[i] - 2];
    for (const c of s) {
      t.push(c);
      dfs(i + 1);
      t.pop();
    }
  };
  dfs(0);
  return answer;
};

/**
 * Solution:
 * Using a method of depth first search to enumerate all possible letter combinations. Suppose that a part of the letter combination has been generated, but some digits have not been
 * exhausted. At this time, we can take out letters corresponding to the next digit, and then enumerate each letter corresponding to this digit one by one, add them to the letter combination
 * that has been generated before, to form all possible combinations.
 *
 * Time complexity is O(4^n), and the space complexity is O(n). Here, n is the length of the input digits
 *
 */
