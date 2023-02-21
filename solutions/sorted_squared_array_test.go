package solutions_test

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
	}