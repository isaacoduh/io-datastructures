/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let answer = 0;
  while (i < j) {
    const t = Math.min(height[i], height[j]) * (j - i);
    answer = Math.max(answer, t);
    if (height[i] < height[j]) {
      ++i;
    } else {
      --j;
    }
  }
  return answer;
};

/**
 * Solution: Two Pointer
 *
 * Initially consider the capacity of the water that the two farthest pillars can hold. The width of the water is the distance between the two pillars, and the height of the water depends
 * on the shorter one between the two pillars.
 *
 * The current pillars are the pillars of the farthest siders, so the width of the water is the largest. For other combinations, the width of the water is smaller. Suppose the height of the left
 * pillar is less than or equal to the height of the right pillar, then the height of the water is the height of the left pillar. if we move the right pillar, the width of the water will decrease,
 * but the height of the water will not increase, so the capacity of the water will definitely decrease. Therefore, we move the left pillar and update the maxium capacity.
 *
 * Repeat this process until the two pillars meet.
 *
 * The time complexity is O(n), where n is the length of the array [height]. The space complexity is O(1)
 *
 *
 *
 */
