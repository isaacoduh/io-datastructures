/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = -1;
  let j = nums.length;
  let k = 0;
  while (k < j) {
    if (nums[k] === 0) {
      ++i;
      [nums[i], nums[k]] = [nums[k], nums[i]];
      ++k;
    } else if (nums[k] === 2) {
      --j;
      [nums[j], nums[k]] = [nums[k], nums[j]];
    } else {
      ++k;
    }
  }
};

/**
 * solution: three pointers
 * define three pointers i, j, k.
 *  - pointer i is used to point to the rightmost boundary of the elements with a value 0 in the array,
 *  - ponter j is used to point to the leftmost boundary of the elements with a value of 2 in the array. Initially, i = -1, j = n.
 *  - pointer k is used to point to the current element being traversed, initally k = 0.
 *
 *  when k < j, we perform the following operations
 *  - if nums[k] = 0, then swap it with nums[i+1], the increment both i and k by 1;
 *  - if nums[k] = 2, then swap it with nums[j - 1], then increment j by 1;
 *  - if nums[k] = 1, then increment by 1.
 *
 *  after the traversal, the element in the array are divided into three parts: [0, i], [i+1, j-1] and [j, n-1]
 *  The time complexity is O(n), where n is the length of the array. Only one traversal of the array is needed. The space complexity is O(1).
 */
