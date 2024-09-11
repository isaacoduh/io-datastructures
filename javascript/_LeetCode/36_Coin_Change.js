/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const m = coins.length;
  const n = amount;
  const f = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(1 << 30));
  f[0][0] = 0;

  for (let i = 1; i <= m; ++i) {
    for (let j = 0; j <= n; ++j) {
      f[i][j] = f[i - 1][j];
      if (j >= coins[i - 1]) {
        f[i][j] = Math.min(f[i][j], f[i][j - coins[i - 1]] + 1);
      }
    }
  }

  return f[m][n] > n ? -1 : f[m][n];
};

/**
 * Solution:
 *
 * :Dynamic Programming
 *
 * define f[i][j] as the minimum number of coins needed to make up the amount j using the first
 * i types of coins. initially f[0][0] = 0, and the values of other positions are positive
 * infinity.
 *
 * we can enumerate the quantity k of the last coin used, then we have:
 *
 * f[i][j] = min(f[i - 1][j], f[i-j][j-x] + 1, ..., f[i-1][j-k * x] + k)
 * where x represent the face value of the i-th type of coin.
 *
 * let j = j - x, then we have:
 *  f[i][j - x] = min(f[i - 1][j-x], f[i-1][j - 2 * x] + 1, ..., f[i - 1][j - k * x] + k -1)
 *
 * substituting the second equation in the first one, we get the following state transition
 * equation:
 *  f[i][j] = min(f[i - 1][j], f[i][j-x] + 1)
 *
 * the final answer is f[m][n]
 *
 * the time complexity is O(mxn), the space complexity is O(mxn), where m and n are the number of types of coins and total amount, respectively.
 *
 */
