function canConstruct(ransomNote, magazine) {
  const cnt = Array(26).fill(0);
  for (const c of magazine) {
    ++cnt[c.charCodeAt(0) - 97];
  }

  for (const c of ransomNote) {
    if (--cnt[c.charCodeAt(0) - 97] < 0) {
      return false;
    }
  }
  return true;
}

/**
 * we use a hash table or an array count of length 26 to record the number of times each character appears in the string 'magazine'. Then travrse the string
 * ransomeNote, for each character c in it, we decrease the numbe rof c by 1 in cnt. if the number of c is less than 0 after the decrease, it means that the number of
 * c in magazine is not enough, is it cannot be composed of ransome note. just return false.
 *
 * otherwise, after the traversal, it means that each character in ransome note can be found in magazine. return true.
 *
 * t = O(m + n)
 * s = O(C)
 *
 * C is the size of the character set, 26 in this case.
 *
 */
