// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    //array of strings, will it ever be empty, number, empty arr
    
    groupAnagrams(strs) {
        //hashmap for sorted words
        let anagramCount={};
        //iteraite through array
        for(let word of strs){
        //sort each word and if it exists push to sub array
        //if not create new subarray  
            let sorted= word.split('').sort().join(''); 
            anagramCount[sorted]
            ?anagramCount[sorted].push(word)
            :anagramCount[sorted]=[word];
            console.log(anagramCount)
         }
        return Object.values(anagramCount)
    }
    //array of sub array(push)
}