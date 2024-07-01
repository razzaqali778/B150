function merge(intervals) {
  if (intervals.length === 0) return []

  intervals.sort((a, b) => a[0] - b[0])
  const merged = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const prev = merged[merged.length - 1]
    const curr = intervals[i]

    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      merged.push(curr)
    }
  }

  return merged
}

// Example usage
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
console.log(merge(intervals))
// Outputs: [[1, 6], [8, 10], [15, 18]]
