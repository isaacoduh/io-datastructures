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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prev = null;
  const dfs = (root) => {
    if (!root) {
      return true;
    }
    if (!dfs(root.left)) {
      return false;
    }
    if (prev && prev.val >= root.val) {
      return false;
    }
    prev = root;
    return dfs(root.right);
  };

  return dfs(root);
};

/**
 * Solution: Recursion
 * perform a recursive in order traversal on the binary tree. if the result of the traversal is strictly ascending, then this tree is a binary search tree.
 *
 * therefore, use a variable prev to save the last node that was traversed. Initially, prev = -Infinity. Then after recursively traverse the left subtree,
 * if the left subtree is not a binary search tree, return False. Otherwise, check whether the value of the current node is greater than prev. if  not, return False.
 * Otherwise, update prev to the value of the current node, and then recursively traverse the right subtree.
 *
 * the time complexity is O(n), and the space complexity is O(n). Where n is the number of nodes in the binary tree.
 *
 */
