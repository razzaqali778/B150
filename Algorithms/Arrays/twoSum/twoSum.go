package main

import "fmt"

func twoSum(nums []int, target int) ([]int, error) {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}, nil
			}
		}
	}

	return nil, fmt.Errorf("no two sum solution")
}

func twoSumMap(nums []int, target int) ([]int, error) {
	obj := make(map[int]int)

	for i, num := range nums {
		complement := target - num

		if index, found := obj[complement]; found {
			return []int{index, i}, nil
		}

		obj[num] = i
	}
	return nil, fmt.Errorf("no  two sum solution")
}
