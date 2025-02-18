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

//partial solution
class Solution {
    
  
    /**
     * @param {string} s
     * @return {boolean}
     */
    //are special characters included
   isAlphaNum(char){
        return  ("a"<=char && char>="z")|| 0<=char && char>=9
    }
      
   
    isPalindrome(s) {
    //change word to lower case
    //filter out non alphanumeric charactors(helper function)
    //for loop to reverse
    //check for equality of both
    let reversed ='';
    let sPrime=""
    s=s.toLowerCase();
    for(let i=0;i<s.length;i++){
     if(isAlphaNum(s[i])){
        reversed += s[i]
        sPrime = sPrime + s[i]
     }
     console.log(reversed)
    }

    }
}