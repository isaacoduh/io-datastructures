/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    const ans = [intervals[0]];
    for (let i = 1; i < intervals.length; ++i) {
      if (ans.at(-1)[1] < intervals[i][0]) {
        ans.push(intervals[i]);
      } else {
        ans.at(-1)[1] = Math.max(ans.at(-1)[1], intervals[i][1]);
      }
    }
    return ans;
  };

  intervals.push(newInterval);
  return merge(intervals);
};
