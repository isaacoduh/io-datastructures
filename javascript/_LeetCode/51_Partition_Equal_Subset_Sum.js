/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const s = nums.reduce((a, b) => a + b, 0);
  if (s % 2 === 1) {
    return false;
  }
  const n = nums.length;
  const m = s >> 1;
  const f = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
  f[0][0] = true;
  for (let i = 1; i <= n; ++i) {
    const x = nums[i - 1];
    for (let j = 0; j <= m; ++j) {
      f[i][j] = f[i - 1][j] || (j >= x && f[i - 1][j - x]);
    }
  }
  return f[n][m];
};

/**
 * Solution: Dynamic Programming
 * first calculate the total sum s of the array. if the total sum is odd, it cannot be divided into two subsets with equal sums, so we directly return false.
 * if the total sum is even, we set the target subset sum to m = s/2. The problem is then transformed into: does there exist a subset whose element sum is m?
 *
 * we define f[i][j] to represent whether it is possible to select several number from the first i numbers so that their sum is exactly j.
 * initially, f[0][0] = true and the rest f[i][j] = false. The answer is f[n][m]
 *
 * considering f[i][j], if we select the i-th number x, then f[i][j] = f[i - 1][j-x]. if we do not select the i-th number x, then f[i][j] = f[i - 1][j]. Therefore the
 * state transition equation is:
 *  f[i][j] = f[i - 1][j] or f[i - 1][j - x] if j >= x
 *
 * the final answer is f[n][m]
 *
 * The time complexity is O(m x n), and the space complexity is O(m x n). Where m and n are half of the total sum of the array and the length of the array
 * respectively.
 *
 */
