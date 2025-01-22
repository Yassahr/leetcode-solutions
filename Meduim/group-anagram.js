function groupAnagrams(strs) {
    //hash map to collect the ordered char: word
    let result ={};
    for(let word of strs){
    //order the char using a hashtable 
        let sorted= new Array(26).fill(0)
        //iteriate through each word to create sorted version of word
        for(let i=0; i<word.length; i++){
         sorted[word[i].charCodeAt(0)-'a'.charCodeAt(0)] += 1
        }
        console.log(sorted)
     //standardizing the word format   
    let key= sorted.join('-')

    if(!result[key]){
        result[key]=[]
    }
    result[key].push(word)
}
console.log(result)
return Object.values(result)
}