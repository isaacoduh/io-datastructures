/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  const n = intervals.length;
  let i = 0;
  while (i < n) {
    let [l, r] = intervals[i];
    i++;
    while (i < n && r >= intervals[i][0]) {
      r = Math.max(r, intervals[i][1]);
      i++;
    }
    result.push([l, r]);
  }
  return result;
};

/**
 * Sorting + One-Pass Traversal:
 *
 * we can sort the intervals in the ascending order by the left endpoint, and then traverse the intervals for merging operations.
 *
 * the specific merging operation is as follows:
 *
 * First we add the first interval to the answer, then we consider each subsequent interval in turn:
 *  - if the right endpoint of the last interval in the answer array is less than the left endpoint of the current interval, it means that the two intervals
 *    will not overlap, so we can directly add the current interval to the end of the answer array.
 *  - otherwise, it means that the two intervals overlap. we need to use the right endpoint of the current interval to update the right endpoint of the last interval
 *     in the answer array, setting it to the larger of the two.
 *
 *  finally, we return the answer array.
 *  the time complexity is O(n x logn), and the space complexity is O(log n). Here, n is the number of intervals.
 */
