const string = "A man, a plan, a canal: Panama";
const isValidaPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // initialize left/right pointers to start and end of string respectively
  let left = 0;
  right = s.length - 1;
  // loop through string characters while comparing them, then move pointers closer to the center
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isValidaPalindrome(string));
