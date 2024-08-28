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
var maxDepth = function (root) {
  if (!root) return 0;
  const l = maxDepth(root.left);
  const r = maxDepth(root.right);
  return 1 + Math.max(l, r);
};

/**
 * Recursively traverse the left and right subtrees, calculate the maximum depth of the left and right subtrees, and then take the maximum value plus 1.
 * t = O(n) where n is number of nodes in binary tree;
 */
