// You are given two strings s1 and s2.

// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

// Both strings only contain lowercase letters.

// Example 1:

// Input: s1 = "abc", s2 = "lecabee"

// Output: true
// Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

// Example 2:

// Input: s1 = "abc", s2 = "lecaabee"

// Output: false
// Constraints:

// 1 <= s1.length, s2.length <= 1000
// class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    //edge cases: duplicate numbers in s1, will s1 also be shorter string, 
    checkInclusion(s1, s2) {
        //hashtable(length=26) for longer string
        //Store in a value
        //for loop for s1 and subtract s1
        //check so each index for s2 = 0
        //confirm all those indicies are equal to zero 
        //if index != 0 then return false
    }
}
