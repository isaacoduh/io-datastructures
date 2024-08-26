/**
 * Defition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whethere version is bad
 * isBadVersion = function(version) {};
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function isBadVersion() {
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      const mid = (left + right) >>> 1;
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
