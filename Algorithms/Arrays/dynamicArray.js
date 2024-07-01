class DynamicArray {
  constructor() {
    this.capacity = 2
    this.length = 0
    this.arr = new Array(2)
  }

  // Insert n in the last position of the array
  pushback(n) {
    if (this.length === this.capacity) {
      this.resize()
    }
    this.arr[this.length] = n
    this.length++
  }

  resize() {
    this.capacity *= 2
    const newArr = new Array(this.capacity)
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.arr[i]
    }
    this.arr = newArr
  }

  // Remove the last element in the array
  popback() {
    if (this.length > 0) {
      this.arr[this.length - 1] = undefined
      this.length--
    }
  }

  // Get value at i-th index
  get(i) {
    if (i < 0 || i >= this.length) {
      throw new Error('Index out of bounds')
    }
    return this.arr[i]
  }

  // Insert n at i-th index
  insert(i, n) {
    if (i < 0 || i > this.length) {
      throw new Error('Index out of bounds')
    }
    if (this.length === this.capacity) {
      this.resize()
    }
    for (let j = this.length; j > i; j--) {
      this.arr[j] = this.arr[j - 1]
    }
    this.arr[i] = n
    this.length++
  }

  print() {
    let s = ''
    for (let i = 0; i < this.length; i++) {
      s += this.arr[i] + ' '
    }
    console.log(s.trim())
  }
}
let dynamicArray = new DynamicArray()
dynamicArray.pushback(5)
dynamicArray.pushback(10)
dynamicArray.print() // Outputs: 5 10

dynamicArray.pushback(15)
dynamicArray.print() // Outputs: 5 10 15

dynamicArray.popback()
dynamicArray.print() // Outputs: 5 10

console.log(dynamicArray.get(1)) // Outputs: 10

dynamicArray.insert(1, 20)
dynamicArray.print() // Outputs: 5 20 10

try {
  console.log(dynamicArray.get(10)) // Throws an error
} catch (e) {
  console.error(e.message) // Outputs: Index out of bounds
}

try {
  dynamicArray.insert(10, 30) // Throws an error
} catch (e) {
  console.error(e.message) // Outputs: Index out of bounds
}
