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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let result = 0;
  const dfs = (root) => {
    if (root == null) {
      return 0;
    }
    const { left, right } = root;
    const l = dfs(left);
    const r = dfs(right);
    result = Math.max(result, l + r);
    return Math.max(l, r) + 1;
  };
  dfs(root);
  return result;
};

/**
 * diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 * the length of a path between two nodes is represented by the number of edges between them.
 *
 *
 *
 */
