function groupAnagrams(strings) {
  const anagramMap = {};
  for (const str of strings) {
    const sortedString = str.split("").sort().join("");
    if (sortedString in anagramMap) {
      anagramMap[sortedString].push(str);
    } else {
      anagramMap[sortedString] = [str];
    }
  }

  return Object.values(anagramMap);
}

const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groups = groupAnagrams(strings);

console.log(groups);
