package test_code

//   Write a function that takes in a non-empty array of integers that are sorted
//   in ascending order and returns a new array of the same length with the squares
//   of the original integers also sorted in ascending order.

//Sample Input
// array = [1, 2, 3, 5, 6, 8, 9]

//Sample Output
// [1, 4, 9, 25, 36, 64, 81]

// Mayday, mayday! this is NASA Pilot calling all stations. We are experiencing a malfunction in our descent to Mars. Our navigation system is off and we are veering off course.
// Our landing gear is damaged, and we can't land safely without repairing it. We need to find a solution to our problem quickly before we crash into Mars.
// We need to calculate the squares of some numbers to help us repair the landing gear. There are thousands of very large numbers so we need an algorithm ASAP"

type SortedSquaredArrayTestCode struct {
	module string
}

func (tc *SortedSquaredArrayTestCode) TestCode() string {
	return `package solutions_test

	import (
		"reflect"
		"testing"
		"github.com/connorstake/csgo/solutions"
	)
	
	func TestSortedSquaredArray(t *testing.T) {
		tests := []struct {
			input  []int
			output []int
		}{
			{
				input:  []int{-5, -3, 0, 2, 8},
				output: []int{0, 4, 9, 25, 64},
			},
			{
				input:  []int{-9, -3, 2, 6, 10},
				output: []int{4, 9, 36, 81, 100},
			},
			{
				input:  []int{-7, -5, -4, -1},
				output: []int{1, 16, 25, 49},
			},
			{
				input:  []int{1, 2, 3, 5, 6, 8, 9},
				output: []int{1, 4, 9, 25, 36, 64, 81},
			},
		}
	
		for _, test := range tests {
			result := solutions.SortedSquaredArray(test.input)
			if !reflect.DeepEqual(result, test.output) {
				t.Errorf("Failed test for input %v. Expected %v but got %v", test.input, test.output, result)
			}
		}
	}`
}

func (tc *SortedSquaredArrayTestCode) TestFileName() string {
	return tc.module + "_test.go"
}

func (tc *SortedSquaredArrayTestCode) SolutionFileName() string {
	return tc.module + "_solution_user.go"
}

// Possible Solution
// func SortedSquaredArray(array []int) []int {
// 	n := len(array)
// 		result := make([]int, n)
// 		left, right := 0, n-1

// 		for i := n-1; i >= 0; i-- {
// 			if abs(array[left]) > abs(array[right]) {
// 				result[i] = array[left] * array[left]
// 				left++
// 			} else {
// 				result[i] = array[right] * array[right]
// 				right--
// 			}
// 		}

// 		return result
// 	}

// 	func abs(x int) int {
// 		if x < 0 {
// 			return -x
// 		}
// 		return x
// 	}
