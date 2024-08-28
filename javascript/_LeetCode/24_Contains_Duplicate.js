/**
 * @param {number []} nums
 * @return {boolean}
 *
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

/**
 * Solution1:
 * Sort the array nums.
 * The traverse the array. If there are two adjacent elements are the same it means that there are duplicate elements in the array, and we return true.
 * Otherwise, when the traversal ends, we return false.
 *
 * Time complexity O(n x logn), where n is the length of the array nums.
 *
 * Solution 2:
 * Hash table:
 * Traverse the array and record the elements that have appeared in the hash table s. if the element appears for the second time, it means there are duplicate elements in the array
 * and we directly return true.
 *
 * Time complexity is O(n), and the space complexity is O(n), where n is length of the array nums.
 *
 */
