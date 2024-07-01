function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

// Linear search is the simplest search algorithm. It checks each element of the list sequentially until the desired element is found or the list ends.
