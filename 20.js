/* ADD BINARY
Given two binary strings a and b, return their sum as a binary string.
Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
*/

var addBinary = function(a, b) {
    let arr1 = [...a]
    let arr2 = [...b]
    let carry = 0
    let result = []
    let i = arr1.length - 1
    let j = arr2.length - 1
    while(i >= 0 || j >= 0 || carry){
        let sum = 0
        if ( i >= 0 ){
            sum += parseInt(arr1[i])
        }
        if ( j >= 0 ){
            sum += parseInt(arr2[j])
        }
        console.log(sum);
        sum += carry
        carry = Math.floor(sum / 2)
        result.unshift(sum % 2)
        i--
        j--
    }
    return result.join('')
};
console.log(addBinary('11' , '1'));
