// There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

// Example:

// Input: points = [[3,9],[7,14],[10,16],[17,20]]

// Expected Output: The balloons can be burst by 2 arrows:

// Shoot an arrow at x = 10, bursting the balloons [3,9], [7,14], and [10,16].

// Shoot an arrow at x = 18, bursting the balloon [17,20].

function findMinArrowShots(points) {
  if (points.length === 0) return 0

  // Sort the balloons by their end coordinates
  points.sort((a, b) => a[1] - b[1])

  let arrows = 1
  let end = points[0][1]

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      arrows++
      end = points[i][1]
    }
  }

  return arrows
}

// Example usage
let points1 = [
  [3, 9],
  [7, 14],
  [10, 16],
  [17, 20],
]
console.log(findMinArrowShots(points1)) // Output: 2

let points2 = [
  [1, 6],
  [2, 8],
  [7, 12],
  [10, 16],
]
console.log(findMinArrowShots(points2)) // Output: 2
