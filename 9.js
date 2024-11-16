//Palindrome number
//1221
var isPalindrome = function(x) {
    if ( x < 0 ) return false;
    let reverse = 0 , original = x;
    while ( x !== 0 ){
        let digit = x % 10;
        reverse = reverse * 10 + digit;
        x  = Math.floor(x /10);
    }
    return original === reverse;
};

console.log(isPalindrome(1221));