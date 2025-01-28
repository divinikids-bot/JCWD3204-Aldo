let word = "The QuiCk BrOwN Fox";

let ScrambleWord = word.replace(/\w/g, char =>
  char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
);

console.log(ScrambleWord);
