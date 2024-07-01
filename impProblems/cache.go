package main

import (
	"fmt"
)

// Define a custom type alias for the function signature
type MemoizedFuncType func(int) int

// Function to create a memoized version of adding 256
func memoizedAddTo256() MemoizedFuncType {
	cache := make(map[int]int)

	return func(num int) int {
		value, found := cache[num]
		if found {
			return value
		}
		value = num + 256 // Assuming you want to add 256 as in the original example
		cache[num] = value
		return value
	}
}

func main() {
	// Create an instance of the memoized function
	var memoizedFunc MemoizedFuncType = memoizedAddTo256()

	fmt.Println(memoizedFunc(10)) // 266
	fmt.Println(memoizedFunc(10)) // cached value, 266
	fmt.Println(memoizedFunc(20)) // 276
	fmt.Println(memoizedFunc(20)) // cached value, 276
}
