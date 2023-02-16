package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"os/exec"

	"github.com/connorstake/csgo/test_code"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

const (
	SOLUTION_FOLDER_PREFIX = "solutions/"
)

func main() {
	// Create a new Gorilla Mux router
	r := mux.NewRouter()
	// allow CORS for all routes
	r.Use(mux.CORSMethodMiddleware(r))
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},           // All origins
		AllowedMethods: []string{"GET", "POST"}, // Allowing only get, just an example
	})
	// Register the "solution" endpoint with the router
	r.HandleFunc("/solution/{module}", solutionHandler).Methods("POST")

	fmt.Println("listening on port 8000")
	// Start the HTTP server
	http.ListenAndServe(":8000", c.Handler(r))

}

func solutionHandler(w http.ResponseWriter, r *http.Request) {
	// Read the JSON data from the request body
	decoder := json.NewDecoder(r.Body)
	var jsonData map[string]string
	err := decoder.Decode(&jsonData)
	if err != nil {
		http.Error(w, "Invalid JSON data", http.StatusBadRequest)
		return
	}
	code := jsonData["answer"]

	vars := mux.Vars(r)
	module := vars["module"]
	test := test_code.NewTestCode(module)

	err = ioutil.WriteFile(SOLUTION_FOLDER_PREFIX+test.SolutionFileName(), []byte(code), 0644)
	if err != nil {
		panic(err)
	}

	testCodeFile := test.TestCode()
	err = ioutil.WriteFile(SOLUTION_FOLDER_PREFIX+test.TestFileName(), []byte(testCodeFile), 0644)
	if err != nil {
		panic(err)
	}

	cmd := exec.Command("go", "test", "./"+SOLUTION_FOLDER_PREFIX)
	output, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("OUTPUT: ", string(output))
	defer func() {
		err = os.Remove(SOLUTION_FOLDER_PREFIX + test.TestFileName())
		if err != nil {
			panic(err)
		}

		err = os.Remove(SOLUTION_FOLDER_PREFIX + test.SolutionFileName())
		if err != nil {
			panic(err)
		}
	}()

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(output))
}
