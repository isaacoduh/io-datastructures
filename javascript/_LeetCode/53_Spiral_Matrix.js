/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const ans = [];
  const vis = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const dirs = [0, 1, 0, -1, 0];
  for (let h = m * n, i = 0, j = 0, k = 0; h > 0; --h) {
    ans.push(matrix[i][j]);
    vis[i][j] = true;
    const x = i + dirs[k];
    const y = j + dirs[k + 1];
    if (x < 0 || x >= m || y < 0 || y >= n || vis[x][y]) {
      k = (k + 1) % 4;
    }
    i += dirs[k];
    j += dirs[k + 1];
  }
  return ans;
};
/**
 * Simulation:
 * we use i and j to represent the row and columns of the current element, use k to represent the current direction, and use an array or hash table vis to record whether each element has been visited.
 * Each time we visit an element, we mark it as visited, the move forward in the current direction. If we find that it is out of bounds or has been visited after moving forward, we change the direction
 * and continue to move forward until the entire matrix is traversed!
 *
 * the time complexity is O(mxn), and the space complexity is O(m x n). Here, m and n are the number of rows and columns of the matrix, respectively.
 *
 * For visited elements, we can add a constant 300 to their valueus, so that we do not need an extra vis array or hash table to record whether they have been visited, thereby reducing the space
 * complexity to O(1)
 *
 */
