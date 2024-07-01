//*array to list

class ListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

function arrayToList(arr) {
  if (arr.length === 0) return null

  let head = new ListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}
let arr = [1, 2, 3, 4, 5]
let linkedListFromArray = arrayToList(arr)
console.log(linkedListFromArray)

//*list to  array \\\\\\\\\\\\\

function linkedListToArray(head) {
  let arr = []
  let current = head

  while (current !== null) {
    arr.push(current.value)
    current = current.next
  }
  return arr
}
let arrayFromLinkedList = linkedListToArray(linkedListFromArray)
console.log(arrayFromLinkedList)

//*object to list
class ListNode {
  constructor(key, value, next = null) {
    this.key = key
    this.value = value
    this.next = next
  }
}

function objectToList(obj) {
  const keys = Object.keys(obj)

  if (keys.length === 0) return null

  let head = new ListNode(keys[0], obj[keys[0]])
  let current = head

  for (let i = 1; i < keys.length; i++) {
    current.next = new ListNode(keys[i], obj[keys[keys]])
    current = current.next
  }

  return head
}
let obj = { a: 1, b: 2, c: 3 }
let linkedListFromObject = objectToList(obj)
console.log(linkedListFromObject)

//* list to object

function linkedListToObject(head) {
  let obj = {}
  let current = head
  let index = 0

  while (current !== null) {
    obj[index] = current.value
    current = current.next
    index++
  }

  return obj
}

let objectFromLinkedList = linkedListToObject(linkedListFromArray)
console.log(objectFromLinkedList)

//*map to list
class ListNode {
  constructor(key, value, next = null) {
    this.key = key
    this.value = value
    this.next = next
  }
}
function mapToLinkedList(map) {
  const iterator = map.entries()
  const firstEntry = iterator.next()
  if (firstEntry.done) return null

  let head = new ListNode(firstEntry.value[0], firstEntry.value[1])
  let current = head

  for (let entry of iterator) {
    current.next = new ListNode(entry[0], entry[1])
    current = current.next
  }

  return head
}

// Example usage:
let map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
])
let linkedListFromMap = mapToLinkedList(map)
console.log(linkedListFromMap)

//*list to map

function linkedListToMap(head) {
  let map = new Map()
  let current = head
  let index = 0

  while (current !== null) {
    map.set(index, current.value)
    current = current.next
    index++
  }
  return map
}

//*set To list
class ListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

function setToLinkedList(set) {
  const iterator = set.values()
  const firstValue = iterator.next()
  if (firstValue.done) return null

  let head = new ListNode(firstValue.value)
  let current = head

  for (let value of iterator) {
    current.next = new ListNode(value)
    current = current.next
  }

  return head
}

// Example usage:
let set = new Set([1, 2, 3, 4, 5])
let linkedListFromSet = setToLinkedList(set)
console.log(linkedListFromSet)

//* list to set
function listToSet(head) {
  let set = new Set()
  let current = head

  while (current !== null) {
    set.add(current.value)
    current = current.next
  }

  return set
}
