/**
 * You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const q = [];
  let cnt = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === 1) {
        cnt++;
      } else if (grid[i][j] === 2) {
        q.push([i, j]);
      }
    }
  }
  let ans = 0;
  const dirs = [-1, 0, 1, 0, -1];
  for (; q.length && cnt; ++ans) {
    const t = [];
    for (const [i, j] of q) {
      for (let d = 0; d < 4; ++d) {
        const [x, y] = [i + dirs[d], j + dirs[d + 1]];
        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
          grid[x][y] = 2;
          t.push([x, y]);
          cnt--;
        }
      }
    }
    q.splice(0, q.length, ...t);
  }
  return cnt > 0 ? -1 : ans;
};

/**
 * Solution 1: BFS
 * First, we traverse the entire grid once, count the number of fresh oranges, denoted as cnt, and add the coordinates of all rotten oranges to queue q.
 * Next, we perform a breathfirst search. in each round of search, we let all the rotten oranges in the queue rot the fresh oranges in the next four directions, until the queue is empty or the
 * number of oranes is 0.
 *
 * Finally, if the number of oranges is 0, we return the round number and otherwise, we return -1.
 * The time complexity is O(m x n), and the space complexity is O(m x n). Where m and n are the number of rows and columns of the grid, respectively.
 *
 */
