/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const ans = new Array(n);
  for (let i = 0, left = 1; i < n; ++i) {
    ans[i] = left;
    left *= nums[i];
  }
  for (let i = n - 1, right = 1; i >= 0; --i) {
    ans[i] *= right;
    right *= nums[i];
  }
  return ans;
};

/**
 * solution: two passes
 *
 * we define two variables left and right, which represent the product of all elements
 * to the left and right of the current element. initally, left = 1, right = 1. Define
 *  an answer array ans of length n.
 *
 * we first traverse the array from left to right, for the ith element we update ans[i] with
 * left, then left multiplied with nums[i].
 *
 * then, we traverse the array from left to right, for the ith element, we update ans[i]
 * to ans[i] * right, then right multiplied by nums[i].
 *
 * after the traversal, the array ans is the answer.
 *
 * the time complexity is O(n), where n is the length of the array nums.
 *
 */
