// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
class Solution {
    
    isAlphaNumeric(char) {
        return (char>='a'&& char<='z')||
              (char>='A' && char<='Z')||
              (char>='0' && char<='9')
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS='';
        for(let char of s){
            if(this.isAlphaNumeric(char)){
                newS+=char.toLowerCase()
            }
        }
        return newS === newS.split('').reverse().join('')
    }
}

