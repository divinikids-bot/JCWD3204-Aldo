//Method 1

// let replaceWord = (input) => input.replace(/a/gi, '*');

// let text = 'An apple a day keeps the doctor away';
// console.log(replaceWord(text));


//Method 2

let text = 'An apple a day keeps the doctor away';
let result = '';

for (let i = 0; i < text.length; i++) {
    result += (text[i].toLowerCase() === 'a') ? '*' : text[i];
}

console.log(result);