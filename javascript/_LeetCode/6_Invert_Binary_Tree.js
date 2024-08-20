/** Tree, Depth-First Search, Breadth First and Binary Tree */

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
 * @return {TreeNode}
 */

var invertTree = function (root) {
  //   if (!root) {
  //     return root;
  //   }

  //   const l = invertTree(root.left);
  //   const r = invertTree(root.right);
  //   root.left = r;
  //   root.right = l;
  //   return root;

  const dfs = (root) => {
    if (!root) {
      return;
    }

    [root.left, root.right] = [root.right, root.left];
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return root;
};

/**
 * Recursion:
 * swap the left and right subtrees of the current node, and then recursively swap the left and right subtrees of the current note
 * t = O(n)
 * s = O(n)
 *
 */
