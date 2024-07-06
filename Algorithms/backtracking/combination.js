const combinations = function (n, k) {
  let res = []

  function helper(start, curr) {
    if (curr.length === k) {
      res.push([...curr])
      return
    }

    for (let j = start; j <= n; j++) {
      curr.push(j)
      helper(j + 1, curr)
      curr.pop()
    }
  }

  helper(1, [])

  return res
}
