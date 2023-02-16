import { Module } from './module';

export class ValidateSubsequenceModule extends Module {
    constructor() {
        super('validate_subsequence', {
            dialogueSequence: [
                "Captain Lamport here. That was a close call! Thanks to you, we will have enough fuel to complete our mission. Your next mission is to help us safely land on Mars. To do this, we must deploy a series of probes on the planet's surface to map out the safest path for the spacecraft to land.",
                "The probes are equipped with cameras and sensors that capture images and data of the surrounding area. We need your help to develop a program that analyzes the data to determine the safest path.",
                "The program breaks down the images and data into smaller segments and will need an algorithm that determines if a particular segment is a subsequence of the entire image.",
                "We are counting on you to help us land safely. Check back in when you're ready with that algorithm!"
            ],
        }, '/images/validate_subsequence.mp4', "package solutions\n\n\n //   Write a function that takes in a non-empty array of distinct integers and an \n //   integer representing a target sum. If any two numbers in the input array sum \n //   up to the target sum, the function should return them in an array, in any \n //   order. If no two numbers sum up to the target sum, the function should return \n //   an empty array. \n\n //   Note that the target sum has to be obtained by summing two different integers \n //   in the array; you can't add a single integer to itself in order to obtain the \n //   target sum. \n\n //   You can assume that there will be at most one pair of numbers summing up to \n //   the target sum. \n\n\n //   Sample Input = [3, 5, -4, 8, 11, 1, -1, 6]\n //   Sample Target Sum = 10\n //   Sample Output = [-1, 11]\n\nfunc TwoSum(nums []int, target int) []int {\n\treturn []int{}\n}\n");
    }
}
