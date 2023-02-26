import { Module } from './module';

export class SortedSquaredArrayModule extends Module {
    constructor() {
        super('sorted_squared_array', {
            dialogueSequence: [
                "Mayday, mayday! this is NASA Pilot calling all stations. We are experiencing a malfunction in our descent to Mars. Our navigation system is off and we are veering off course.",
                "Our landing gear is damaged, and we can't land safely without repairing it. We need to find a solution to our problem quickly before we crash into Mars.",
                "We need to calculate the squares of some numbers to help us repair the landing gear. There are thousands of very large numbers so we need an algorithm ASAP"
            ],
        }, '/images/mars/sorted-squared-array.mp4', "package solutions\n\n\n //   Write a function that takes in a non-empty array of integers that are sorted \n //   in ascending order and returns a new array of the same length with the squares \n //   of the original integers also sorted in ascending order. \n\n //   Sample Input \n //   array = [1, 2, 3, 5, 6, 8, 9] \n //   Sample Output = [1, 4, 9, 25, 36, 64, 81]\n\nfunc SortedSquaredArray(array []int) []int {\n\t// Write your code here.\n\treturn nil\n}", "Congratulations! You have successfully completed the Two Sum module.", 
        '/images/cover/mars-cover.png');
    }
}
