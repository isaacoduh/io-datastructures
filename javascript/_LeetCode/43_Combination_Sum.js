/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the choosen numbers
 * sum to target. You many return combinations in any order.
 *
 * The same number may be choosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the choosen numbers is different.
 *
 *
 *
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const ans = [];
  const t = [];
  const dfs = (i, s) => {
    if (s === 0) {
      ans.push(t.slice());
      return;
    }
    if (s < candidates[i]) {
      return;
    }

    for (let j = i; j < candidates.length; ++j) {
      t.push(candidates[j]);
      dfs(j, s - candidates[j]);
      t.pop();
    }
  };
  dfs(0, target);
  return ans;
};

/***
 * Solution: Sorting + Pruning + Backtracking
 *
 * first sort the array to facilitate prunning.
 *
 * design a function dfs(i, s), which means starting the search from index i with a remaining target value of s. Here, i and s are both non-negative integers, the current search part is t, and the answer is ans.
 *
 * in the function dfs(i, s), we first check whether s is 0. if it is, then add the current search path t to the answer ans, and then return.
 * if s < candidates[i], it means that the elements of the current index and the following indices are all greater than the remaining target value s, and the part is invalid, so we return directly.
 * Otherwise, we start the search from index i, and the search index range is j E [i, n], where n is the length of the array candidates. During the search, we add the element of the current index to the search path t,
 * recursively call the function dfs(j,s - candidates[j]), and after the recursion ends, we remove the elemtn of the current index from the search path t.
 *
 * in the main function, we just need to call the function dfs(0, target) to get the answer.
 *
 * The time complexity is O(2^n x n), and the space complexity is O(n). Here, n is the length of the array candidates. Due to prunning, the actual time complexity is much less than O(2^n x n).
 *
 */
