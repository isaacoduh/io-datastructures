/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < n - 2 && nums[i] <= 0; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      const x = nums[i] + nums[j] + nums[k];
      if (x < 0) {
        j++;
      } else if (x > 0) {
        --k;
      } else {
        ans.push([nums[i], nums[j++], nums[k--]]);
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          --k;
        }
      }
    }
  }
  return ans;
};

/**
 * Solution 1: Sort + Two Pointers
 * notice that the problem does not require returning the triplet in order, so might as well sort the array first, which makes it easy t o skip duplicate elements.
 *
 * next enumerate the first element of the triplet nums[i], where 0 <= i < n -2. For each i, we can find j and k satisfying nums[i] + nums[j] + nums[k]  = 0 by maintaining two
 * pointers j = i + 1 and k = n - 1. in the enumeration process, we need to skip duplicate elements to avoid duplicate triplets.
 *
 * The specific judgement logic is as follows:
 * if i > 0 and nums[i] = nums[i - 1], it means that the element currently enumerated is the same as the previous element, we can skip it directly, because it will not produce
 * any new results.
 *
 * if nums[i] > 0, it means that the element currently enumerated is greater ahn 0, so the sum of the three numbers must not be equal to 0, and the enumeration ends.
 *
 * otherwise, we let the left pointer j = i + 1, and the right pointer k = n - 1.  When j < k, the loop is executed, and the sum of three numbers  x = nums[i] + nums[j] + nums[k]
 * is calculated and compared with 0:
 *
 * if x < 0, it means that nums[j] is too small, we need to move j to the right
 * if x > 0, it means that nums[k] is too learge, we need to move k to the left
 * otherwise, it means that we have found a valid triplet, add it to the answer, move j to the right, move k to the left, and skip all duplicate elements to continue looking
 * for the next valid triplet.
 *
 * after the enumeration is over, we can get the anser to the triplet.
 *
 * the time complexity is O(n^2), and the space complexity is O(logn). The n is the length of the array.
 *
 *
 *
 */
