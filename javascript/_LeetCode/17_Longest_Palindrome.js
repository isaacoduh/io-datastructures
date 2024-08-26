function longestPalindrome(s) {
  const cnt = {};
  for (const c of s) {
    cnt[c] = (cnt[c] || 0) + 1;
  }
  let ans = Object.values(cnt).reduce(
    (acc, v) => acc + Math.floor(v / 2) * 2,
    0
  );
  ans += ans < s.length ? 1 : 0;
  return ans;
}

/**
 * a valid palindrome string can have at most one character that appears an odd number of times, the rest of the characters appear an even number of times.
 * Therefore, we can traverse the string s, count the number of occurences of each character, and record it in an arry of hash table cnt.
 * Then we traverse cnt, for each count v, we divide it by 2, take the integer part, multiply it by 2 and add it to the answer ans.
 * finally, if the answer is less than the length of the str, we increment the answer by 1, and return ans.
 *
 * The time complexity = O(n + summation())
 * space of complexity = O(summation(character_set))
 * character_set is 128
 *
 */
