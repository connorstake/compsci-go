package test_code

type TwoSumTestCode struct {
	module string
}

func (tc *TwoSumTestCode) TestCode() string {
	return `package solutions_test

	import (
		"reflect"
		"sort"
		"testing"
		"github.com/connorstake/csgo/solutions"
	)
	
	func TestTwoSum(t *testing.T) {
		testCases := []struct {
			nums   []int
			target int
			want   []int
		}{
			{nums: []int{2, 7, 11, 15}, target: 9, want: []int{2, 7}},
			{nums: []int{3, 5, -4, 8, 11, 1, -1, 6}, target: 10, want: []int{-1, 11}},
			{nums: []int{1, 2, 3, 4, 5, 6}, target: 11, want: []int{5, 6}},
			{nums: []int{1, 2, 3, 4, 5, 6}, target: 10, want: []int{4, 6}},
			{nums: []int{-1, -2, -3, -4, -5}, target: -8, want: []int{-3, -5}},
			{nums: []int{1, 2, 3, 4, 5, 6}, target: 1, want: []int{}},
			{nums: []int{2, 4, 6, 8}, target: 10, want: []int{4, 6}},
			{nums: []int{1, 2, 3, 4, 5, 6}, target: 15, want: []int{}},
			{nums: []int{0, 0, 1, 2, 3, 4}, target: 0, want: []int{0, 0}},
			{nums: []int{1, 1, 2, 3, 4, 5}, target: 2, want: []int{1, 1}},
			{nums: []int{1, 2, 3, 4, 5, 6}, target: 4, want: []int{1, 3}},
		}
	
		for _, tc := range testCases {
			got := solutions.TwoSum(tc.nums, tc.target)
			sort.Ints(got)
			sort.Ints(tc.want)
			if !reflect.DeepEqual(got, tc.want) {
				t.Errorf("TwoSum(%v, %v) = %v; want %v", tc.nums, tc.target, got, tc.want)
			}
		}
	}`
}

func (tc *TwoSumTestCode) TestFileName() string {
	return "two_sum_test.go"
}

func (tc *TwoSumTestCode) SolutionFileName() string {
	return "two_sum_solution_user.go"
}


// SOLUTION

// intMap := make(map[int]bool)
//     for _, num := range nums {
//         if intMap[target-num] {
//             return []int{target - num, num}
//         }
//         intMap[num] = true
//     }
//     return []int{}