/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target <= nums[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }
  return nums[left] == target ? left : -1;
};

/**
 * Binary Search:
 * divide the array into two parts, [left, ...mid] and [mid + 1, ...right]. At this point, we can find the one part that must be sorted.
 *
 * Therefore, we can determine whether target is in this part based on the sorted part:
 * if the elements in the range [0, ...mid] form a sorted array:
 *  - if nums[0] =< target <= nums[mid], then our search range should be narrowed down to [left, ...mid];
 *  - otherwise, search in [mid + 1, ...right]
 * if the lement in the range [mid + 1, n - 1] form a sorted array:
 *  - if nums[mid] < target <= nums[n-1], then our search range can be narrowed down to [mid + 1, ...right];
 *  - otherwise, search in [left, ...mid]
 *
 * The termination condition for binary search is left >= right. if at the end we find that nums[left] is not equal to target, it means that ehre is no element with a value of
 * target in the array, and we return -1. Otherwise, return the index left.
 *
 * The time complexity is O(logn), where n is the length of the array nums. The space complexity is O(1)
 *
 */
