// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

// Example 1:

// Input: prices = [10,1,5,6,7,1]

// Output: 6
// Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

// Example 2:

// Input: prices = [10,8,7,5,2]

// Output: 0
// Explanation: No profitable transactions can be made, thus the max profit is 0.

// Constraints:

// 1 <= prices.length <= 100
// 0 <= prices[i] <= 100

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length===1){
            return 0
        }
        //find the lowest num
        let min = Math.min(...prices)
        //slice from num to end
        let minIndex= prices.indexOf(min)

        //if minIndex===array.length-1
        if( minIndex===prices.length-1){
            prices.pop()
             //find the lowest num
            min = Math.min(...prices)
            minIndex= prices.indexOf(min)
        }

        //pop then redefine minId
        //find math max 
        let subArray= prices.slice(minIndex)
        return Math.max(...subArray) - min
        //conditional to check the length
        //iteriate through array
        //find the min and max of sliding window
        //push the difference to an array 
        //return Math.max of that array 
    }
}