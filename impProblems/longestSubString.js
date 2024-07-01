function longestSubStringWithoutRepeatingChar(s) {
  let maxlen = 0
  let start = 0
  const charIndexMap = {}

  for (let end = 0; end < s.length; end++) {
    const char = s[end]

    if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1
    }

    charIndexMap[char] = end
    maxlen = Math.max(maxlen, end - start + 1)
  }

  return maxlen
}
// Example usage
const s = 'abcabcbb'
console.log(longestSubStringWithoutRepeatingChar(s)) // Outputs: 3
