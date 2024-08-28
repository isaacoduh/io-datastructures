// [Array] [Divide and Conquer] [Dynamic Programming]
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0];
  let f = nums[0];

  for (let i = 1; i < nums.length; i++) {
    f = Math.max(f, 0) + nums[i];
    ans = Math.max(ans, f);
  }

  return ans;
};

/**
 * we define f[i] to represent the maximum sum of the continous sub array ending with the element nums[i]. Initially, f[0] = nums[0]. The final answer we are looking for is the max 0<= i <n f[i]
 * consider f[i], where i >= 1,
 *
 */
