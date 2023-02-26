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
        }, '/images/mars/validate_subsequence.mp4', "package solutions  // **DO NOT CHANGE THIS LINE**\n\n // Given two non-empty arrays of integers, write a function that determines \n // whether the second array is a subsequence of the first one. \n // A subsequence of an array is a set of numbers that aren't necessarily adjacent \n // in the array but that are in the same order as they appear in the array. For \n // instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4] \n // and so do the numbers [2, 4]. Note that a single number in an array and the \n // array itself are both valid subsequences of the array. \n\n // Sample Input \n // array = [5, 1, 22, 25, 6, -1, 8, 10] \n // sequence = [1, 6, -1, 10] \n\n // Sample Output \n // true \n\n\nfunc IsValidSubsequence(array []int, sequence []int) bool {\n\t// Write your code here.\n\treturn false\n}\n\n",
            "Congratulations! You have successfully completed the Validate Subsequence module.", '/images/cover/mars-cover.png');
    }
}
