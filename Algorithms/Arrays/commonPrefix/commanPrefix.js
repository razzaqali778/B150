function commonPrefix(arr) {
  if (!arr.length) return ''

  let prefix = arr[0]

  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== -1) {
      prefix = prefix.slice(0, -1)

      if (!prefix) return ''
    }
  }
  return prefix
}
