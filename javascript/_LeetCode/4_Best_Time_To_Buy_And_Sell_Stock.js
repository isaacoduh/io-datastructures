// Array
// Dynamic Programming
var maxProfit = function (prices) {
  let ans = 0;
  let mi = prices[0];
  for (const v of prices) {
    ans = Math.max(ans, v - mi);
    mi = Math.min(mi, v);
  }
  return ans;
};

/**
 * enumerate each element in the array as selling pirce. then we need to find a minimum value in front of it as the purchase
 * price to maximize profit.
 * var min to maintain the prefix minimum value of the array prices.
 * then traverse the array nums and for each element i, calculate the difference between it and the minimum value min in front of it,
 * and update the answer to the maximum of the difference.
 * then update min to be the mininum between min and i, continue traversal of the array nums until the traversal ends
 */
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
