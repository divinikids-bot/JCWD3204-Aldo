let word = "hello world";
let capitalword = word.replace(/\b\w/g, char => char.toUpperCase()); 
console.log(capitalword);