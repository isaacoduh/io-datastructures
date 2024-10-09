/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) {
    return [0];
  }
  const g = Array.from({ length: n }, () => []);
  const degree = Array(n).fill(0);
  for (const [a, b] of edges) {
    g[a].push(b);
    g[b].push(a);
    ++degree[a];
    ++degree[b];
  }
  const q = [];
  for (let i = 0; i < n; ++i) {
    if (degree[i] === 1) {
      q.push(i);
    }
  }
  const ans = [];
  while (q.length > 0) {
    ans.length = 0;
    const t = [];
    for (const a of q) {
      ans.push(a);
      for (const b of g[a]) {
        if (--degree[b] === 1) {
          t.push(b);
        }
      }
    }
    q.slice(0, q.length, ...t);
  }
  return ans;
};

/**
 * Solution:
 * Topological Sorting:
 * if the tree has only one node, then this node is the root of the minimum height tree. We can directly return its node.
 * if the tree has multiple nodes, there must be leaf nodes. A leaf node is a node that has only one adjacent node. We can use topological sorting to peel off the leaf nodes from the outside
 * to the inside. When we reach the last layer, the remaining nodes are the root nodes of tha maximum height tree.
 *
 * The time complexity is O(n) and the space complexity is O(n), where n is the number of nodes.
 */
