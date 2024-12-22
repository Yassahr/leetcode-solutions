// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]


class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       return strs.length >1?strs.join("-"): strs
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.length >1?str.split("-"): str
    }
}