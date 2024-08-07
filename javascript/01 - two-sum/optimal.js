const numsArray = [1, 3, 7, 9, 2];
const target = 11;

const findTwoSum = function (nums, target) {
  const numsMaps = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMaps[nums[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numToFind = target - nums[p];
      numsMaps[numToFind] = p;
    }
  }
  return null;
};

console.log(findTwoSum(numsArray, target));
