// The Fibonacci numbers form a sequence where each number is the sum of the two preceding ones, starting from 0 and 1.
// The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// Write a function that returns the nth Fibonacci number.
// Examples:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
//f(9) means what is the value of the 9th fib number

//number  will it ever be a negative, non-int/float, big int
//number which is sum to num and previous 2 numres


function fibb(n){
    //cache to save results
    //operation to add the 2 previous fib results
    //base case = fib of 1 =1
    let cache={};

      function fib(n){
        if(n in cache){
            console.log('condition 2')
            return cache[n]
        }else if(n==1||n==0 ){
            console.log('condition 1')
            cache[n] = 1
            return cache[n]
        }
        else{
            console.log('condition 3')
           cache[n]=fib(n-1)+fib(n-2)
            return cache[n]
        }
    }
    fib(9)
    console.log(cache)
    return cache[n]
}

console.log(9,fibb(9))