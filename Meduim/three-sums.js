// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

var threeSum = function(nums) {
    //establish return arr
    //sort array
 
 
    //for loop 
      //check if i>0 and if num[i]===num[i-1]
                 //countine
        //define j and k 
         //while loop for  being more than j>k 
             //define total
             //conditional for value of total
                 //push of equal to 0
                 //j++
                     //conditional for j>0 and num[j-1]=num[j]
 
     //return res
 
 let res=[]
 nums.sort((a,b)=>a-b)
 
 for(let i=0; i<nums.length; i++){
     if(i>0 && nums[i]===nums[1-1]){
         continue
     }
 
     let j= i +1
     let k= nums.length-1
     while(j<k){
         let total= nums[i]+nums[j]+nums[k]
 
         if(total>0){
             console.log("i got to c1")
 
             k--
         }else if(total<0){
           console.log("i got to c2", total)
 
             j++
         }else{
               console.log("i got to c3")
 
             res.push([nums[i],nums[j],nums[k]])
             j++
             while(j<k && nums[j]===nums[j-1]){
                 j++
             }
         }
     }
     return res
    }
