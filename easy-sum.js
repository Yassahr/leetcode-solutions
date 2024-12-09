// Two Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:

// Input: 
// nums = [3,4,5,6], target = 7

// Output: [0,1]




class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let number of nums){
            let counterpart = target-number;
            console.log(number, counterpart)
          if(nums[counterpart]){
            return [nums.indexOf(number), nums.indexOf(counterpart)]
            } 
        }
    }
}//return the index of the number
//does the array have to be in the right order
// will each have a partner