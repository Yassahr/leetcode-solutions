// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.


topKFrequent(nums, k) {
    //set up hash to count frequency
    let frequency ={};
    for(const num of nums){
        frequency[num]=(frequency[num]||0) + 1;
    }
    console.log(frequency)
    //filter values for those more than or equal to frequency
    return Object.keys(frequency).filter(n=> frequency[n]>=k )
    //return filter
    }
