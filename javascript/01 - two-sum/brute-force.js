const numsArray = [1, 3, 7, 9, 2];
const target = 11;

const findTwoSum = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
};

console.log(findTwoSum(numsArray, target));
