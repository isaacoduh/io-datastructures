/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  return left && right ? root : left || right;
};

/**
 * we recursively traverse the binary tree:
 *
 * if the current node is null or equals to p or q, the we return the current node;
 *
 * otherwise, we recursively traverse the left and right subtrees, and record the returned results as left and right.
 * if both left and right are not null, it means that p and q are in the left and right subtrees respectively!, so the current node is the nearest
 * common ancestor; if only one of left and right is not null, we return the one that is not null.
 *
 * the time complexity is O(n), and the space complexity is O(n). Here, n is the number of nodes in the binary tree
 *
 */
