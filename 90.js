/*
    338. Counting Bits
    Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
    ans[i] is the number of 1's in the binary representation of i.
    Example 1:
        Input: n = 2
        Output: [0,1,1]
    Explanation:
        0 --> 0
        1 --> 1
        2 --> 10
    Example 2:
        Input: n = 5
        Output: [0,1,1,2,1,2]
    Explanation:
        0 --> 0
        1 --> 1
        2 --> 10
        3 --> 11
        4 --> 100
        5 --> 101
    
    Constraints:
        0 <= n <= 105
*/

// HELPER FUNCTION APPROACH
// var countOnes = function(str) {
//     let count = 0;
//     for ( let i = 0 ; i < str.length ; i++ ){
//         if ( str[i] === '1' ){
//             count++;
//         }
//     }
//     return count;
// }
// var countBits = function(n) {
//     // Make "digitArr" array
//     let digitArr = [] , ans = [];
//     for ( let i = 0 ; i <= n ; i++ ){
//         // store in the digitArr after converting to binary
//         digitArr.push(i.toString(2));
//     }
//     // call the helper function to count 1's
//     for ( let i = 0 ; i < digitArr.length ; i++ ){
//         ans.push( countOnes(digitArr[i]));
//     }
//     return ans
// };

// DIRECT APPROACH
var countBits = function(n) {
    let ans = []
    for ( let i = 0 ; i <= n ; i++ ){
        let binaryNum = i.toString(2);
        let onesCount = binaryNum.split('').filter(bit => bit === '1' ).length;
        ans.push(onesCount);
    }
    return ans
};
console.log(countBits(5))