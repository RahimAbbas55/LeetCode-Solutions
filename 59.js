/*
    342. Power of Four
    Given an integer n, return true if it is a power of four. Otherwise, return false.
    An integer n is a power of four, if there exists an integer x such that n == 4x.

    Example 1:
        Input: n = 16
        Output: true

    Example 2:
        Input: n = 5
        Output: false

    Example 3:
        Input: n = 1
        Output: true
*/
var isPowerOfFour = function(n) {
    let counter = 0 , orignal = n;
    while ( n !== 0 && n % 4 === 0 ){
        n = Math.floor( n / 4 );
        counter++;
    }
    return ( 4 ** counter ) === orignal
};
console.log(isPowerOfFour(16))
console.log(isPowerOfFour(5))
console.log(isPowerOfFour(1))