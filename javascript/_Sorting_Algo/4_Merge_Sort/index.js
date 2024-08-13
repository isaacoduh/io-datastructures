function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }

  results.push(...left.slice(i));
  results.push(...right.slice(j));

  return results;
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
