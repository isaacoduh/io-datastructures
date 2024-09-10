/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const preMap = {};
  const visited = {};

  for (let i = 0; i < prerequisites.length; i++) {
    if (preMap[prerequisites[i][0] === undefined]) {
      preMap[prerequisites[i][0]] = [prerequisites[i][1]];
    } else {
      preMap[prerequisites[i][0]].push(prerequisites[i][1]);
    }
  }
  console.log(preMap);
  const dfs = (node) => {
    if (visited[node]) {
      return false;
    }
    if (preMap[node] !== undefined) {
      if (preMap[node].length === 0) {
        return true;
      }

      visited[node] = true;
      for (let val of preMap[node]) {
        if (!dfs(val)) {
          return false;
        }
      }
      visited[node] = false;
      preMap[node] = [];
    }
    return true;
  };

  for (let key in preMap) {
    if (!dfs(key)) {
      return false;
    }
  }

  return true;
};

/**
 * solution: topological sorting
 *
 * for this problem, consider courses as nodes in a graph, and prerequisites as edges in a graph. Thus, the problem can be transformed
 * into finding whether there is cycle in a directed graph!.
 *
 * specifically, we can use the idea of topological sorting. for each node with an in-degree of 0, we reduce the in-degree of its out-degree nodes by 1, until all nodes
 * have been traversed.
 *
 * if all nodes have been traversed, it means there is not cycle in the graph, and we can complete all courses; otherwise,
 * we cannot complete all course.
 *
 * the time complexity is O(m+n), and the space complexity is O(m+n). Here, n and m are the number of courses and prerequisites.
 *
 */
