// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in 
// O
// (
// n
// )
// O(n) time without using the division operation?

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
     let ans=[];
     for(let i=0; i<=nums.length-1; i++){
       let product = nums.reduce((acc, n, ind)=>{
            if(ind === i){
                return acc 
            }else{
                return acc * +n
            }
        },1)
        ans.push(product)
     }
     return ans
    }
}