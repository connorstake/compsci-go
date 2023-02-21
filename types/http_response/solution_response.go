package http_response

import "strings"

// SolutionResponse is the response from the solution endpoint
type SolutionResponse struct {
	Success bool   `json:"success"`
	Output  string `json:"output"`
}

// NewSolutionResponse returns a new SolutionResponse
func NewSolutionResponse(output string, success bool) *SolutionResponse {
	return &SolutionResponse{
		Output: output,
		Success: success,
	}
}

// TestCheck is a test check
type TestCheck struct {
	output string
}

// NewTestCheck returns a new TestCheck
func NewTestCheck(output string) *TestCheck {
	return &TestCheck{
		output: output,
	}
}

// Passing returns true if the test passed
func (tc *TestCheck) Passing() bool {
	return strings.ContainsAny(tc.output, "ok") && !strings.ContainsAny(tc.output, "FAIL")
}
