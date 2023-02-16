import { Module } from './module';

export class TwoSumModule extends Module {
    constructor() {
        super('two_sum', {
            dialogueSequence: [
                "Attention all NASA personnel! We have a critical task at hand. Our spaceship is experiencing some technical difficulties, and we need your help in solving it.",
                "We have discovered that the fuel consumption of our spacecraft is not optimal and could result in a premature end to the mission.",
                "Your task is to build a function that can take in an array of integers and a target value, and return a pair of numbers that sum up to the target value, if such a pair exists.",
                "The safety of our astronauts is in your hands. We need you to deliver a solution that works flawlessly, efficiently, and accurately to optimize our fuel consumption and ensure the safe return of our crew. Good luck!"
            ],
        }, '/images/two-sum.mp4', "package solutions\n\n\n //   Write a function that takes in a non-empty array of distinct integers and an \n //   integer representing a target sum. If any two numbers in the input array sum \n //   up to the target sum, the function should return them in an array, in any \n //   order. If no two numbers sum up to the target sum, the function should return \n //   an empty array. \n\n //   Note that the target sum has to be obtained by summing two different integers \n //   in the array; you can't add a single integer to itself in order to obtain the \n //   target sum. \n\n //   You can assume that there will be at most one pair of numbers summing up to \n //   the target sum. \n\n\n //   Sample Input = [3, 5, -4, 8, 11, 1, -1, 6]\n //   Sample Target Sum = 10\n //   Sample Output = [-1, 11]\n\nfunc TwoSum(nums []int, target int) []int {\n\treturn []int{}\n}\n");
    }
}
