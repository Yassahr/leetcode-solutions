// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

var addTwoPromises = async function(promise1, promise2) {
    console.log(promise1) 
    const prom1= await promise1
    const prom2= await promise2
    return prom1 + prom2
};
//some alt solutions