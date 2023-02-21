package solutions


 //   Write a function that takes in a non-empty array of integers that are sorted 
 //   in ascending order and returns a new array of the same length with the squares 
 //   of the original integers also sorted in ascending order. 

 //   Sample Input 
 //   array = [1, 2, 3, 5, 6, 8, 9] 
 //   Sample Output = [1, 4, 9, 25, 36, 64, 81]

func SortedSquaredArray(array []int) []int {
	n := len(array)
	result := make([]int, n)
	left, right := 0, n-1

	for i := n-1; i >= 0; i-- {
		leftSquare := array[left] * array[left]
		rightSquare := array[right] * array[right]
		if leftSquare > rightSquare {
			result[i] = leftSquare
			left++
		} else {
			result[i] = rightSquare
			right--
		}
	}

	return result
}



