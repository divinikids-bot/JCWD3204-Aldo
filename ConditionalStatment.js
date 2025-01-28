//Method 1


// let num1 = 42;
// let num2 = 27;
// let num3 = 18;

// if (num1 > num2) { 
//     [num1, num2] = [num2, num1]; 
// }
// if (num1 > num3) { 
//     [num1, num3] = [num3, num1]; 
// }
// if (num2 > num3) { 
//     [num2, num3] = [num3, num2]; 
// }

// console.log(num1, num2, num3);


//Method 2

let num1 = 42;
let num2 = 27;
let num3 = 18;
let smallest, middle, largest;

if (num1 <= num2 && num1 <= num3) {
    smallest = num1;
    if (num2 <= num3) {
        middle = num2;
        largest = num3;
    } else {
        middle = num3;
        largest = num2;
    }
} else if (num2 <= num1 && num2 <= num3) {
    smallest = num2;
    if (num1 <= num3) {
        middle = num1;
        largest = num3;
    } else {
        middle = num3;
        largest = num1;
    }
} else {
    smallest = num3;
    if (num1 <= num2) {
        middle = num1;
        largest = num2;
    } else {
        middle = num2;
        largest = num1;
    }
}

console.log(smallest, middle, largest);

