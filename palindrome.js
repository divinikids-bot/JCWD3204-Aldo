
let word = 'madam';

let isPalindrome = str => {
    str = str.replace(/\s/g, '').toLowerCase(); 
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] !== str[right]) {
        return false; 
      }
      left++;
      right--;
    }
  
    return true; 
  };
  
  
  
  console.log(word + " is palindrome:", isPalindrome(word));