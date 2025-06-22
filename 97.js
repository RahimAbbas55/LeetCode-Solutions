/*
    507. Perfect Number
    A perfect number is a positive integer that is equal to the sum of its positive divisors, 
    excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
    Given an integer n, return true if n is a perfect number, otherwise return false.

    Example 1:
        Input: num = 28
        Output: true
        Explanation: 28 = 1 + 2 + 4 + 7 + 14
        1, 2, 4, 7, and 14 are all divisors of 28.
    Example 2:
        Input: num = 7
        Output: false
    Constraints:
        1 <= num <= 108
*/
//NORMAL APPROACH
var checkPerfectNumber = function(num) {
    const halfNum = Math.floor( num / 2 );
    let sum = 1;
    for ( let i = 2 ; i <= halfNum ; i++ ){
        if ( num % i === 0 ){
            sum += i;
        }
    }
    return sum === num;
};
// SQUARE ROOT APPROACH
var checkPerfectNumber = function(num) {
    if (num <= 1) return false;

    let sum = 1; // 1 is always a proper divisor
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            let pair = num / i;
            if (pair !== i) sum += pair;
        }
    }
    return sum === num;
};
console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));