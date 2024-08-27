/**
 * The majority element is the element that appears more than [n/2] times.
 *
 */

/**
 * @param {number[] } nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let cnt = 0;
  let m = 0;
  for (const x of nums) {
    if (cnt === 0) {
      m = x;
      cnt = 1;
    } else {
      cnt += m === x ? 1 : -1;
    }
  }
  return m;
};

/**
 * Solution
 * moore voting problem
 *
 * Initialize the element m and intialize the count cnt = 0. Then for each element x in the input list:
 * if cnt = 0, then m = x and cnt == 1
 * otherwise, if m = x, then cnt = cnt + 1, otherwise cnt = cnt - 1
 *
 * in general the moore voting algorithm requires two passs over the input list. The first pass, we generate the candidte value m, and if there is majority,
 * the candidte value is the majority valye. In the second pass, we simply compute the frequency of the candidate value to confirm whether it is the majority value.
 *
 * Since this problem has clearly stated that there is a majority value, we can directly return m after the first pass, without the need for a second pass to confirm
 * whether it is the majority value.
 */
