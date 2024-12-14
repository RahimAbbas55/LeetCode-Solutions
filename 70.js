/*
    415. Add Strings
    Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
    You must solve the problem without using any built-in library for handling large integers (such as BigInteger). 
    You must also not convert the inputs to integers directly.

    Example 1:
        Input: num1 = "11", num2 = "123"
        Output: "134"
    Example 2:
        Input: num1 = "456", num2 = "77"
        Output: "533"
    Example 3:
        Input: num1 = "0", num2 = "0"
        Output: "0"
    Constraints:
        1 <= num1.length, num2.length <= 104
*/
var addStrings = function(num1, num2) {
    let result = '' , carry = 0 , i = num1.length - 1 , j = num2.length - 1;
    while ( i >= 0 || j >= 0 || carry ){
        let d1 = i >=0 ? num1[i] - '0' : 0;
        let d2 = j >=0 ? num2[j] - '0' : 0;

        let sum = d1 + d2 + carry;
        carry = Math.floor( sum  / 10 );
        result = (sum % 10) + result;
        i--;
        j--;
    }
    return result;
};
console.log(addStrings('11' , '123'));