// Brute Force Approach

function find_averages_of_subarrays(K, arr) {
  const result = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    let sum = 0.0;
    for (j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K);
  }
  return result;
}

const result_brute = find_averages_of_subarrays(
  5,
  [1, 3, 2, 6, -1, 4, 1, 8, 2]
);
console.log(`Averages of Subarrays of size k (brute force): ${result_brute}`);

// Sliding Window
function find_averages_of_subarrays_sliding(K, arr) {
  // define windowsum, window start point
  let windowSum = 0.0,
    windowStart = 0;
  const result = [];
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= K - 1) {
      // push the sum to the results array
      result.push(windowSum / K);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return result;
}

const result_sliding_window = find_averages_of_subarrays_sliding(
  5,
  [1, 3, 2, 6, -1, 4, 1, 8, 2]
);
console.log(
  `Averages of Subarrays of size k (sliding window): ${result_sliding_window}`
);

/**
 * Maximum Sum subarray of size k (Easy)
 * Problem Statement #
    Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
 * 
 */

function max_sub_array_of_size_k_brute(k, arr) {
  let maxSum = 0,
    windowSum = 0;
  for (i = 0; i < arr.length - k + 1; i++) {
    // window sum set to 0
    windowSum = 0;
    for (j = i; j < i + k; j++) {
      windowSum += arr[j];
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(
  `Maximum sum of a subarray of size k _brute: ${max_sub_array_of_size_k_brute(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.log(
  `Maxiumum sum of a subarray of size K _brute: ${max_sub_array_of_size_k_brute(
    2,
    [2, 3, 4, 1, 5]
  )}`
);

function max_sub_array_of_size_k_sliding(k, arr) {
  let windowStart = 0,
    maxSum = 0,
    windowSum = 0;
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      // this means that we have meet the current window terminal
      // so compare the result
      maxSum = Math.max(maxSum, windowSum);

      // delete the window start
      windowSum -= arr[windowStart];

      // set a new window start
      windowStart++;
    }
  }
  return maxSum;
}

console.log(
  `Maximum sum of a subarray of size k _sliding: ${max_sub_array_of_size_k_sliding(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.log(
  `Maxiumum sum of a subarray of size K _sliding: ${max_sub_array_of_size_k_sliding(
    2,
    [2, 3, 4, 1, 5]
  )}`
);

function smallest_subarray_with_given_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the window_sum is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 3, 2]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 8]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    8,
    [3, 4, 1, 1, 6]
  )}`
);
