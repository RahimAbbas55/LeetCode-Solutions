/*
    441. Arranging Coins
    You have n coins and you want to build a staircase with these coins. 
    The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
    Given the integer n, return the number of complete rows of the staircase you will build.

    Example 1:
        Input: n = 5
        Output: 2
        Explanation: Because the 3rd row is incomplete, we return 2.

    Example 2:
        Input: n = 8
        Output: 3
        Explanation: Because the 4th row is incomplete, we return 3.

    Constraints:
        1 <= n <= 231 - 1
*/
var arrangeCoins = function(n) {
    // let staircase = [] , coinsLeft = n , row = 1;
    // while ( coinsLeft >= row ){
    //     staircase.push( new Array(row).fill(1) );
    //     coinsLeft -= row;
    //     row++;
    // }
    // return staircase.length;

    let left = 0, right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sum = (mid * (mid + 1)) / 2;

        if (sum === n) {
            return mid; 
        } else if (sum < n) {
            left = mid + 1; 
        } else {
            right = mid - 1;
        }
    }
    return right;
};
console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
console.log(arrangeCoins(1804289383))