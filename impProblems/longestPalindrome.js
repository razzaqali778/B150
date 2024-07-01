function longestPalindrome(s) {
  let start = 0
  let maxLength = 1

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        start = left
        maxLength = right - left + 1
      }
      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i) // odd length palindromes
    expandAroundCenter(i, i + 1) // even length palindromes
  }

  return s.substring(start, start + maxLength)
}

// Example usage
const s = 'babad'
console.log(longestPalindrome(s)) // Outputs: "bab" or "aba"
