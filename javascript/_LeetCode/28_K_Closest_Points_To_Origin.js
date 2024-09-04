/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const dist = points.map(([x, y]) => x * x + y * y);
  let [l, r] = [0, Math.max(...dist)];
  while (l < r) {
    const mid = (l + r) >> 1;
    let cnt = 0;
    for (const d of dist) {
      if (d <= mid) {
        ++cnt;
      }
    }
    if (cnt >= k) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return points.filter((_, i) => dist[i] <= l);
};

/**
 * Binary Search
 *
 * as the distance increases, the number of points increases as well. There exists a critical value such that the number of points before this value is less
 * than or equal to k, and the number of points after this value is greater than k
 *
 * therefore we can use binary search to enumerate the disance. In each binary search iteration, we count the number of points whose distance is less than or
 * equal to the current distance. if the count is greater than or equal to k, it indicates tht the critical value is on the left side, so we set the right boundary
 * equal to the current distance; otherwise, the critical value is on the right side, so we set the left boundary equal to the current distance plus one.
 *
 * after the binary search is finished, we just need to return the points whose distance is less than or equal to the left boundary.
 *
 * The time complexity O(n x log M), and the space complexity is O(n). Here, n is the length of the array points, and M is the maximum value of the distance.
 *
 */
