//Method 1
// let checkInputType = (input) => {
//     if (typeof input === 'string') {
//         return 1;
//     } else if (typeof input === 'number') {
//         return 2;
//     } else {
//         return 3;
//     }
// };

// console.log(checkInputType("hello")); 
// console.log(checkInputType(69));    
// console.log(checkInputType(true));

//Method 2

let inputs = ["hello", 42, true, [], {}];

for (let i = 0; i < inputs.length; i++) {
    let result = (typeof inputs[i] === 'string') ? 1 
                : (typeof inputs[i] === 'number') ? 2 
                : 3;
    console.log(`Input: ${inputs[i]} → ${result}`);
}
