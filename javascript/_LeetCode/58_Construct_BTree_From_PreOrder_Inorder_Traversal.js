/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const d = new Map();
  const n = inorder.length;
  for (let i = 0; i < n; ++i) {
    d.set(inorder[i], i);
  }
  const dfs = (i, j, n) => {
    if (n <= 0) {
      return null;
    }
    const v = preorder[i];
    const k = d.get(v);
    const l = dfs(i + 1, j, k - j);
    const r = dfs(i + 1 + k - j, k + 1, n - 1 - (k - j));
    return new TreeNode(v, l, r);
  };
  return dfs(0, 0, n);
};

/**
 * Solution: Hash tables
 *
 * the first node preorder [0] in the preorder sequence is the root node. We find the position k of the root node in the in-order sequence, which can divide the in-order sequence into the left
 * left subtree inorder[0..k] and the right subtree inorder[k+1...]
 *
 * Through the intervals of the left and right subtrees, we can calculate the number of nodes in the left and right subtrees, assumed to be a and b. Then in the preorder nodes, the a nodes after
 * the root nodes are the left subtree, and the b nodes after that are the right subtree.
 *
 * Therefore, we design a function dfs(i, j,n), where i and j represent the starting positions of the preorder sequence and the in-order sequence, respectively, and n represents the number of nodes.
 * The return value of the function is the binary tree constructed with preorder [i..i + n - 1] as the pre-order sequence and inorder[j..j + n -1] as the in-order sequence
 *
 * The execution process of the function dfs(i, j, n) is as follows:
 * - if n <= 0, it means that no nodes, return a null node.
 * - take out the first node v = preorder[i] of the preorder sequence as the root node, and then use the hash table d to find the position k of the root node in the in-order sequence. Then
 * the number of nodes left in the left subtree is k - j, and the number of nodes in the right subtree is n - k + j - 1.
 * - Recursively construct the the left subtree l = dfs(i + 1, j, k - j) and the right subtree r = dfs(i + 1+ k -j, k + 1, n - k + j -1 ).
 * - finally, return the binary tree with v as the root node and l and r as the left and right subtrees, respectively.
 *
 * The time complexity is O(n), and the space complexity is O(n). Here, n is the number of nodes in the binary tree.
 *
 */
