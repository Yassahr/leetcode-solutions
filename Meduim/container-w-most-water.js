
// You are given an integer array heights where heights[i] represents the height of the 
// i
// t
// h
// i 
// th
//   bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.
class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    //input is an array of  ints
    //output is max "vol" that can be produced
    //output in the 2nd largest number squared
    //edge cases is to control for dups
    maxArea(heights) {
        //new set
        //establish return num
        // find the max
        //return which number-num has the smallest min?-
    
    let max= Math.max(...heights)
    let secMax=max;
    let ans= max;
    console.log("max",max)
    for(let nums of heights ){
        let diff = max-nums
    console.log("diff",diff)

        if(diff< secMax && diff!=0){
            secMax= diff
            ans=nums
        }
    console.log(ans, secMax)
    }

return ans*ans
        
   
}
//sort has an OLogn 
}