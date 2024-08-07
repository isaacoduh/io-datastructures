function wordCounter(text) {
  const lowerText = text.toLowerCase();
  const wordMap = {};
  const words = lowerText.split(/\s+/);

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
}

const text = `The quick brown fox jumps over the lazy dog. The quick brown fox is quick and brown.`;
const wordCounts = wordCounter(text);
console.log(wordCounts);
