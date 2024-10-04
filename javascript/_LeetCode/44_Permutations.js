/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const n = nums.length;
  const ans = [];
  const t = [];
  const vis = new Array(n).fill(false);
  const dfs = (i) => {
    if (i >= n) {
      ans.push([...t]);
      return;
    }
    for (let j = 0; j < n; ++j) {
      if (!vis[j]) {
        vis[j] = true;
        t.push(nums[j]);
        dfs(i + 1);
        vis[j] = false;
        t.pop();
      }
    }
  };
  dfs(0);
  return ans;
};

// Solution 1: DFS(backtracking)
/**
 * design a function dfs(i) to represent that the first i positions have been filled, and now we need to fill the i + 1 position. We enumerate all possible
 * numbers, if this number has not been filled, we fill in this number, and then continue to fill the next position, until all positions are filled.
 *
 * The time complexity is O(nxn!), where n is the length of the array. There are n! permutations in total, each permutation takes O(n) time to construct.
 *
 */
