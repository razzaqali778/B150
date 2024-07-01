function memo() {
  const cache = {}

  return function (num) {
    if (num in cache) {
      return cache[num]
    }
    cache[num] = num + 256
    return cache[num]
  }
}

const memoFunc = memo()(5)
