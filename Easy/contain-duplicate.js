// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false


//my solution
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      
        return nums.some(n=> nums.indexOf(n)!=nums.lastIndexOf(n))
    }
}



//best solution
function hasDuplicates(nums){
return new Set(nums).size<nums.length
}
//hashset solution
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    //make a new hash set
    //interiate through array and check if hashset has num
    //if it has it return true
    //add num
    //if it does not have it return false after loop
        const numsSet = new Set();
        for(const num of nums){
            if(numsSet.has(num)){
                return true
            }
            numsSet.add(num)
        }
        return false
    }
}
