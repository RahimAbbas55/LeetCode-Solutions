/*
    43. Multiply Strings
    Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2,
    also represented as a string.Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
    Example 1:
        Input: num1 = "2", num2 = "3"
        Output: "6"
    Example 2:
        Input: num1 = "123", num2 = "456"
        Output: "56088"
    Constraints:
        1 <= num1.length, num2.length <= 200
        num1 and num2 consist of digits only.
        Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // Edge case
    if (num1 === "0" || num2 === "0") return "0";

    const res = new Array(num1.length + num2.length).fill(0);

    // Reverse both strings
    num1 = num1.split("").reverse();
    num2 = num2.split("").reverse();

    for (let i1 = 0; i1 < num1.length; i1++) {
        for (let i2 = 0; i2 < num2.length; i2++) {
            const digit = (num1[i1] - '0') * (num2[i2] - '0');

            res[i1 + i2] += digit;
            res[i1 + i2 + 1] += Math.floor(res[i1 + i2] / 10);
            res[i1 + i2] = res[i1 + i2] % 10;
        }
    }

    // Reverse result back
    res.reverse();

    // Remove leading zeros
    let idx = 0;
    while (idx < res.length && res[idx] === 0) {
        idx++;
    }

    return res.slice(idx).join("");
};
console.log(multiply("2" , "3"));
console.log(multiply("123" , "456"));
console.log(multiply("12312312312" , "45312312312"));