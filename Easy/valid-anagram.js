// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

function isAnagram(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('')
}
isAnagram(s, t) {
    //count all of the char in 1 string
    //compare the counts for char in each string 
    //return a boolean

    //instatiate an array/hashmap
    //push all of the values of one of the character to this array
    //subtract all of the char for other string
    //->result is each value is equal to zero
    if(s.length != t.length){ 
        return false;
    }

    s= s.toLowerCase();
    t= t.toLowerCase();
    let count = new Array(26).fill(0);
    for(let i=0; i<s.length; i++){
        //the index of that char in count ++
        count[s.charCodeAt(i)-'a'.charCodeAt(0)]++
        count[t.charCodeAt(i)-'a'.charCodeAt(0)]--

    }
    return count.every(n=> n===0)
    //every method to check 
}