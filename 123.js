/*
    693. Binary Number with Alternating Bits
    Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
    Example 1:
        Input: n = 5
        Output: true
        Explanation: The binary representation of 5 is: 101
    Example 2:
        Input: n = 7
        Output: false
        Explanation: The binary representation of 7 is: 111.
    Example 3:
        Input: n = 11
        Output: false
        Explanation: The binary representation of 11 is: 1011.
    Constraints:
        1 <= n <= 231 - 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const binaryArr = n.toString(2).split('');
    for ( let i = 1 ; i < binaryArr.length ; i++ ){
        if ( binaryArr[i] === binaryArr[i - 1]) return false;
    }
    return true;
};
console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));