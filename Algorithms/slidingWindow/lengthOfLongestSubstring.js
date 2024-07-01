var lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0
  let maxLength = 0
  let charSet = new Set()

  while (j < s.length) {
    if (!charSet.has(s[j])) {
      charSet.add(s[j])
      j++
      maxLength = Math.max(maxLength, charSet.size)
    } else {
      charSet.delete(s[i])
      i++
    }
  }

  return maxLength
}

// Test cases
console.log(lengthOfLongestSubstring('abcabcbb')) // Output: 3
console.log(lengthOfLongestSubstring('bbbbb')) // Output: 1
console.log(lengthOfLongestSubstring('pwwkew')) // Output: 3
