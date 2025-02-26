// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq={}
    for(const number of nums){
        freq[number]=(freq[number]||0)+1
    }
    let ans;
   let max = Math.max(...Object.values(freq))
     for(let num in freq){
        if(freq[num]==max){
            ans= +num
        }
    }
    return ans
    
};