package test_code

// TestCode is a test interface
type Test interface {
	// TestCode is a test interface
	TestCode() string
	TestFileName() string
	SolutionFileName() string
}

// NewTestCode returns a new TestCode
func NewTestCode(module string) Test {
	switch module {
	case "two_sum":
		return &TwoSumTestCode{module}
	case "validate_subsequence":
		return &ValidSubsequenceModule{module}
	case "sorted_squared_array":
		return &SortedSquaredArrayTestCode{module}
	default:
		return nil
	}
}
