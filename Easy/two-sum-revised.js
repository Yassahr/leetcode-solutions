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

 //create a hashmap for all of the values
 //iteriate through object to 1. the counterpart exists and 2 the index is not the same 
//undefined and == i
twoSum(arr, k){
    let numCount={};

//go through and have the kays values as their index number
    for(let i=0; i<arr.length; i++){
        numCount[arr[i]]=i;
    }

    for(let i=0; i<arr.length; i++){
        let countpart= k-arr[i];
        
        if(numCount[countpart]!==undefined && numCount[countpart]!==i ){
            return [i, numCount[countpart]]
        }
    }
    }

}