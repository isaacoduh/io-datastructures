/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [];
  const t = [];
  const dfs = (i) => {
    if (i === nums.length) {
      ans.push(t.slice());
      return;
    }
    dfs(i + 1);
    t.push(nums[i]);
    dfs(i + 1);
    t.pop();
  };
  dfs(0);
  return ans;
};

/**
 * Solution: DFS (Backtracking)
 *
 * design a functioin dfs(i), which represents the starting search from the ith element of the array for all subsets. The execution logic of the function dfs(i) is as follows:
 *
 * if i = n, it means the current search has ended. Add the current subset t to the answer array ans, and then return
 * otherwise, we can choose not to select the current element and directly execute dfs(i + 1); or we can choose the current element, i.e., add the current element nums[i] to the subset t, and then
 * execute dfs(i + 1). Note that we need to remove nums[i] from the subset t after executing dfs(i + 1) (backtracking).
 *
 * in the main function, we call dfs(0), i.e. start searching all subsets from the element of the array. Finally, return the answer array ans.
 * the time complexity is O(n x 2^n), and the space complexity is O(n). Here, n is the length of the array. There are total of 2^n subsets, and each subset takes O(n) time to construct.
 *
 *
 *
 */
