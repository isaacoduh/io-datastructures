/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = [];
  if (!root) {
    return ans;
  }

  const q = [root];
  while (q.length) {
    const t = [];
    const qq = [];
    for (const { val, left, right } of q) {
      t.push(val);
      left && qq.push(left);
      right && qq.push(right);
    }
    ans.push(t);
    q.splice(0, q.length, ...qq);
  }
  return ans;
};

/**
 * BFS
 * using the BFS method to solve this problem. first, enqueue the root note, the continously perform the following operations until the the is empty
 *
 * - traverse all nodes in the current queue, store their values in a temporary array t, and then enqueue their child nodes
 * - store the temporary array t in the answer array.
 * finally return the answer array
 *
 * the time complexity is O(n), the space complexity is O(n). Here, n is the number of nodes in the binary tree.
 *
 */
