/**
 * Definition of for a binary tree node
 * function TreeNode(val, left, right) {
 *  this.val = (val === undefined ? 0 : null)
 *  this.left = (left === undefined ? null : left)
 *  this.right = (right === undefined ? null : right)
 * }
 *
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function (root) {
  const height = (root) => {
    if (!root) {
      return 0;
    }
    const l = height(root.left);
    const r = height(root.right);
    if (l == -1 || r == -1 || Math.abs(l - r) > 1) {
      return -1;
    }
    return 1 + Math.max(l, r);
  };

  return height(root) >= 0;
};

/***
 * Solution Notes:
 * Bottom Up Recursion:
 * - define a function height root to calculate the height of a binary tree, with logic below:
 * - if the binary tree root is null, return 0
 *   otherwise, recursively calculate the heights of the left and right subtrees, denoted as l and r respectively.if either l or r is -1, or the absolute difference
 *   between l and r is greater than 1, return -1. Otherwise, return max(l,r) + 1.
 * Therefore, if the function height (root) returns -1, it means the binary tree root is not balanced. Otherwise it is balanced.
 *
 * t = O(n)
 * s = O(n)
 * n = number of nodes in the binary tree
 *
 */
