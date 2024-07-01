const memo = (): ((num: number) => number) => {
  const cache: { [key: number]: number } = {}

  return function (num: number): number {
    if (num in cache) {
      return cache[num]
    }
    cache[num] = num + 256 // Assuming you want to add 256 as in the original example
    return cache[num]
  }
}

const memoizedFunc = memo()

console.log(memoizedFunc(10)) // 266
console.log(memoizedFunc(10)) // cached value, 266
console.log(memoizedFunc(20)) // 276
console.log(memoizedFunc(20)) // cached value, 276
