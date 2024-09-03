/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  // Calculate the number of rows and columns in matrix
  const m = mat.length;
  const n = mat[0].length;

  // First pass: Top-left to bottom-right
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // Check if the element is greater than zero
      if (mat[i][j] > 0) {
        // Check the element above, if there is no
        // element above, set to infinity
        const up = i > 0 ? mat[i - 1][j] : Infinity;

        // Check the left element, if there is no left
        // element, set to infinity
        const left = j > 0 ? mat[i][j - 1] : Infinity;

        // Update the current element with the minimum
        // of element above and to its left, + 1
        mat[i][j] = Math.min(up, left) + 1;
      }
    }
  }

  // Second pass: Bottom-right to top-left
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // Check if the element is greater than zero
      if (mat[i][j] > 0) {
        // Check the element below, if there is no
        // element below, set to infinity
        const down = i < m - 1 ? mat[i + 1][j] : Infinity;

        // Check the right element, if there is no right
        // element, set to infinity
        const right = j < n - 1 ? mat[i][j + 1] : Infinity;

        // Update the current element with the minimum
        // of its value, element below and to its right,
        // + 1
        mat[i][j] = Math.min(mat[i][j], Math.min(down + 1, right + 1));
      }
    }
  }

  return mat;
};

/**
 * Solution: BFS
 * create a matrix ans of the same size as mat and intialize all elements to -1
 * then, traverse mat, adding the cordinates (i, j) of all 0 elements to the queue q, and setting ans[i][j] to 0.
 *
 * next, we use breadth first search (BFS), removing an element (i, j) from the queue and traversing its four directions. if the elemnt in that direction (x, y) satisfies
 * 0<= x <= m, 0<= y <n, and ans[x][y] = -1, then we set ans[x][y] to ans[x][y] + 1 and add (x,y) to queue, q.
 *
 * finally, return ans
 * the time complexity is O(mxn), and the space complexity is O(mxn). Here, m and n are the number of rows and columns in the matrix mat, respectively.
 */
