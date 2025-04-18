/*
    405. Convert a Number to Hexadecimal
    Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.
    All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.
    Note: You are not allowed to use any built-in library method to directly solve this problem.

    Example 1:
        Input: num = 26
        Output: "1a"
    Example 2:
        Input: num = -1
        Output: "ffffffff"
    Constraints:
        -231 <= num <= 231 - 1
*/
var toHex = function (num){
    if ( num === 0 ){
        return "0";
    }
    let isNegative = num < 0;
    if (isNegative) {
        num = Math.pow(2, 32) + num;  // Convert negative to 32-bit positive
    }
    const hexString = "0123456789abcdef";
    let hexResult = "";
    while ( num > 0 ){
        let remainder = num % 16;
        hexResult = hexString[remainder] + hexResult;
        num = Math.floor( num / 16 );
    }
    return hexResult;
}
console.log(toHex(26));
console.log(toHex(-1));
console.log(toHex(255));  
console.log(toHex(4095)); 
console.log(toHex(16));  