function stray(numbers) {
    return numbers.filter((n,i)=>numbers.indexOf(n)===numbers.lastIndexOf(n))[0]}