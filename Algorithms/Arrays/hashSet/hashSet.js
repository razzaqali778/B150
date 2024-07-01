class MyHashSet {
  constructor() {
    // Initialize buckets
    this.bucketSize = 1000
    this.buckets = new Array(this.bucketSize).fill(null).map(() => [])
  }

  // Simple hash function
  _hash(key) {
    return key % this.bucketSize
  }

  add(key) {
    const hash = this._hash(key)
    const bucket = this.buckets[hash]
    if (!bucket.includes(key)) {
      bucket.push(key)
    }
  }

  contains(key) {
    const hash = this._hash(key)
    const bucket = this.buckets[hash]
    return bucket.includes(key)
  }

  remove(key) {
    const hash = this._hash(key)
    const bucket = this.buckets[hash]
    const index = bucket.indexOf(key)
    if (index !== -1) {
      bucket.splice(index, 1)
    }
  }
}
const myHashSet = new MyHashSet()
myHashSet.add(1) // set = [1]
myHashSet.add(2) // set = [1, 2]
console.log(myHashSet.contains(1)) // return True
console.log(myHashSet.contains(3)) // return False, (not found)
myHashSet.add(2) // set = [1, 2]
console.log(myHashSet.contains(2)) // return True
myHashSet.remove(2) // set = [1]
console.log(myHashSet.contains(2)) // return False, (already removed)
