/*
    504. Base 7
    Given an integer num, return a string of its base 7 representation.
    Example 1:
        Input: num = 100
        Output: "202"
    Example 2:
        Input: num = -7
        Output: "-10"
    Constraints:
        -107 <= num <= 107
*/
var convertToBase7 = function(num) {
    if ( num === 0 ) return 0;
    const sign = num > 0 ? "" : "-";
    num = Math.abs(num);
    let res = ""
    while ( num > 0 ){
        res = (num % 7) + res;
        num = Math.floor(num / 7);
    }
    return sign + res
};
console.log(convertToBase7(200));
console.log(convertToBase7(-7))