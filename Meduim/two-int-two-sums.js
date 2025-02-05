// Given an array of integers numbers that is sorted in non-decreasing order.

// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.

// Your solution must use 
// O
// (
// 1
// )
// O(1) additional space.

// Example 1:

// Input: numbers = [1,2,3,4], target = 3

// Output: [1,2]


class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    //given an array, of all numbers 
    //will there be duplicate numbers?
    twoSum(numbers, target) {
    //hashmap of index and value
    //interiate through array checking for index of target - num
    //if exists then continue with return array
        let indicies={};
        for(let i=0; i<numbers.length; i++){
            indicies[i+1]=numbers[i]
        }
        console.log(indicies)

        for(let i=1; i<numbers.length + 1; i++){
            let diff = target-numbers[i-1]
            console.log(diff)
            //if diff exists and is not the same index
            if(numbers.includes(diff) && (indicies[i]!==i-1)){
                return [i, indicies[i]]
            }

        }
    }
    // array of 1-index of the sum
}
