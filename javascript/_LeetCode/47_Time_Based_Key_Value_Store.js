var TimeMap = function () {
  this.store = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store[key]) {
    this.store[key] = [];
  }
  this.store[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.store[key]) {
    return "";
  } else {
    let foundList = this.store[key];
    const isTimestampFound = binarySearch(timestamp, foundList);
    if (isTimestampFound) {
      return isTimestampFound.value;
    }
    return "";
  }
};

function binarySearch(target, list) {
  let start = 0,
    end = list.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (list[mid][1] === target) {
      return { value: list[mid][0] };
    } else if (list[mid][1] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  if (start > end) {
    if (end < 0 || start > list.length) {
      return false;
    }
    const lcStart = start - 1;
    const lcEnd = end + 1;
    if (list[lcStart][1] < target) {
      return { value: list[lcStart][0] };
    }
    if (list[lcEnd][1] < target) {
      return { value: list[lcEnd][0] };
    }
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

/**
 * the timemap stores key-value pairs with timestamp. When retrieving a value for the key at a given timestamp, it returns
 * the latest value set before or at that timestamp
 *
 * approach:
 * for setting the value, it adds key-value pairs with timestamps to the store.
 * for getting values, it performs a binary search to find the last value set before or at the given timestamp for the key.
 *
 * complexity
 *  - time complexity: O(log n)
 *  - space complexity: O(n)
 *
 */
