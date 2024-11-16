/*
    263. Ugly Number
    An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
    Given an integer n, return true if n is an ugly number.

    Example 1:
    Input: n = 6
    Output: true
    Explanation: 6 = 2 × 3
    Example 2:

    Input: n = 1
    Output: true
    Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
    Example 3:

    Input: n = 14
    Output: false
    Explanation: 14 is not ugly since it includes the prime factor 7.

*/
var isUgly = function(n) {
    if ( n <= 0 ) return false
    let primeFactors = [ 2 , 3 , 5]
    for ( let p of primeFactors ){
        while ( n % p === 0 )
        {
            n /= p
        }
    }
    return n === 1
};
console.log(isUgly(6))
console.log(isUgly(1))
console.log(isUgly(14))