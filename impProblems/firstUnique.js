function firstUniqueChar(s) {
  const charCount = {}

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i
    }
  }

  return -1
}
// Example usage
const s = 'leetcode'
console.log(firstUniqueChar(s)) // Outputs: 0
