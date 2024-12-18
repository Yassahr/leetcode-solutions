// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.
var filter = function(arr, fn) {
    //instantiate return array
    let fnArr=[];
    //iterate through array
    for(let i=0; i<=arr.length-1; i++){
    //conditional to check function result
        if(fn(arr[i], i)){
            fnArr.push(arr[i])
        }
    }
    //return array
    return fnArr
    
};