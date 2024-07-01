function twoSum(arr: number[], target: number): [number, number] | null {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
  return null
}

function twoSumByMap(arr: number[], target: number): [number, number] | null {
  let map: Map<number, number> = new Map()

  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i]

    if (map.has(compliment)) {
      return [map.get(compliment)!, i]
    }

    map.set(arr[i], i)
  }

  return null
}

function twoSumByObj(arr: number[], target: number): [number, number] | null {
  let obj: { [key: number]: number } = {}

  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i]

    if (obj.hasOwnProperty[compliment]) {
      return [obj[compliment], i]
    }

    obj[arr[i]] = i
  }

  return null
}

function twoSumByPointer(
  arr: number[],
  target: number
): [number, number] | null {
  // Create an array of numbers with their original indices
  const numsWithIndices = arr.map((el, i) => ({ el, i }))

  // Sort the array by the numbers
  numsWithIndices.sort((a, b) => a.el - b.el)

  // Initialize two pointers
  let left = 0
  let right = numsWithIndices.length - 1

  // Use two pointers to find the solution
  while (left < right) {
    const sum = numsWithIndices[left].el + numsWithIndices[right].el
    if (sum === target) {
      return [numsWithIndices[left].i, numsWithIndices[right].i]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return null // Return null if no solution is found
}
