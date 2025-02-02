
// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [2,20,4,10,3,4,5]

// Output: 4
function longestConsecutive(nums) {
    let sortedNums = [...new Set(nums.sort((a,b)=>a-b))]
    let countArray=[]
    let count=1
    if (sortedNums.length<=1) return sortedNums.length
    sortedNums.forEach((num, i, arr)=>{
        if(i==arr.length-1){
            count++ 
            countArray.push(count)
        }if((Math.abs(num-arr[i-1]) ==1)&& i!=0){
            count++
            console.log("count",count)
        }else{
            countArray.push(count)
            count=1
        }
    })
    return Math.max(...countArray)

}
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //array of number in number form
    longestConsecutive(nums) {
        //iterate through whole array
        //check if n+1 or n-1 exists
        //if it does add to count
       
        nums= new Set(nums)
         if(nums.size===1){ 
            return 1}
         let count=0;

        for(let number of nums){
            if(nums.has(number+1)||nums.has(number-1)){
                count++
            }
        }
        return count
     
    }
}