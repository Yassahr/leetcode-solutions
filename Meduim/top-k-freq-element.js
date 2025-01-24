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

    //corrected solution(test cases accepted and submited)
    topKFrequent(nums, k) {
        //set up hash to count frequency
        let frequency ={};
        for(const num of nums){
            frequency[num]=(frequency[num]||0) + 1;
        }
        console.log(frequency)
        //filter values for those more than or equal to frequency
        return Object.keys(frequency).sort((a,b)=>frequency[b]-frequency[a]).slice(0, k)
        }

//alternate partial solution
topKFrequent(nums, k) {
    console.log(nums)
    //filter
    let freq={};
    for(let number of nums){
        freq[number]=(freq[number]||0)+1
    }
    let count = Array.from({length: nums.length +1})
    //pushing element to the index that match freq
    //key=number in array, value= freq
    for(let num in freq){
        count[freq[num]]= num
        console.log('num', num,'freq[num]',freq[num], count )
    } 

    console.log('count', count)
    //Create a hashtable where the index reflect the freq 
    // frew=== indez
    console.log(freq, nums)
    let res=[];
    for(let i = count.length; i>0;i--){
        if(count[i]!== undefined ){
            res.push(count[i])
        }
        if(res.length==k){
            return res
        }
    }
    // return Object.keys(freq).filter(n=> freq[n]>=k )
    //create variable to hold result array
    //a part of the code that intrate through code and check(going back was and pushing values)
    //check if length of array=k



}

