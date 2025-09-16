// You are given an array of integers and need to perform a series of transformations to find the "magic number" of the array.
// The magic number is calculated as follows:

// Replace each element with the sum of its digits
// Remove all even numbers from the array
// Find the product of all remaining numbers
// Return the sum of digits of that product

// Complete the function findMagicNumber in the editor below.
// findMagicNumber has the following parameter:

// int arr[n]: an array of integers

// Returns

// int: the magic number of the array

// Constraints

// 1 ≤ n ≤ 100
// 1 ≤ arr[i] ≤ 10000

// Sample Input
// [123, 456, 789, 12]
// Sample Output
// 8


//Given an array of numbers
    //operations we need to do on the individual number 
    //operations we need to do after all the numbers in the arr have neen operated on
//return is a single number

function findMagicNumber(arr){
    //loop
        //replace each num with sum of digits
    //conditional to check eqaulity 
    //product
   const noneEvenSum= arr
    .map(number=>{
        number=number.toString().split('')
       const sum= number.reduce((acc, n)=>{
           return acc+ +n
       }, 0)
       return sum
    })
    .filter((sum)=> sum%2!=0)
  

  return noneEvenSum.reduce((acc, n)=>{
    return acc+n
    }, 0)
    console.log(ans)
}
console.log(findMagicNumber([123, 456, 789, 12]))