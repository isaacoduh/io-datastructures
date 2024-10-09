/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const [m, n] = [board.length, board[0].length];
  const directions = [-1, 0, 1, 0, -1];
  const dfs = (i, j, k) => {
    if (k === word.length - 1) {
      return board[i][j] === word[k];
    }
    if (board[i][j] !== word[k]) {
      return false;
    }
    const c = board[i][j];
    board[i][j] = "0";
    for (let u = 0; u < 4; ++u) {
      const [x, y] = [i + directions[u], j + directions[u + 1]];
      const ok = x >= 0 && x < m && y >= 0 && y < n;
      if (ok && board[x][y] !== "0" && dfs(x, y, k + 1)) {
        return true;
      }
    }
    board[i][j] = c;
    return false;
  };
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Solution 1: DFS (Backtracking)
 *
 * we can enumerate each position (i,j) in the grid as the starting point of the search, and then start a depth first search from the starting point. if we can search to the end of the word. it
 * means the word exists, otherwise, it means the word does not exist.
 *
 * Therefore, we design a function dfs(i,j,k), which represents whether we can successfully search from the (i, j) position of the grid, starting from the kth character of the word. The execution
 * steps of the function dfs(i,j,k) are as follows:
 *
 * - if k = [word] - 1, it means that we have searched to the last character of the word. At this time, we only need to judge whether the character at the (i, j) position of the grid is equal to the
 * word [k]. If they are equal, it means that the word exist, otherwise, it means that the word does not exist. Whether the word exists or not, there is not need to continue to search, so return the
 * word directly.
 * - otherwise, if the word[k] character is not equal to the character at the (i,j) position of the grid, it means that the search failed this time, so return false directly.
 * - otherwise, we temporarily store the character at the (i, j) position of the grid in c, and then modify the character at this position to a special character '0', indicating that the character at this posisiont has been used to prevent it from being reused in subsequent searches. Then we start from the up, down, left and right directions of the (i, j) position to search for the k + 1th character of the griid. if the any direction is successful, it means the search is successful, otherwise it means that the search failed. At this time, we need to restore the character at the (i, j) position of the grid, that is, put c back to the (i, j) position (backtracking).
 * In the main function, we enumerate each position (i, j) in the grid as the starting point. if calling dfs(i, j, 0) returns true, it means that the word exists, otherwise, it means the word does not exists, so return false.
 * The time complexity is O(m x n x 3^k), and the space complexity is O(min(m x n, k)). Here, m and n are the number of rows and columns of the grid, respectively; and k is the length of the string word.
 *
 */
