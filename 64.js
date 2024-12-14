/*
    367. Valid Perfect Square
    Given a positive integer num, return true if num is a perfect square or false otherwise.
    A perfect square is an integer that is the square of an integer. In other words, it is the 
    product of some integer with itself.You must not use any built-in library function, such as sqrt.

    Example 1:
        Input: num = 16
        Output: true
        Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
    Example 2:
        Input: num = 14
        Output: false
        Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
    Constraints:
        1 <= num <= 231 - 1
*/
var isPerfectSquare = function(num) {
    let left = 1 , right = num;
    let mid , m_square;
    while ( left <= right ){
        mid = Math.floor(( left + right ) / 2 );
        m_square = mid * mid;
        if ( num === m_square ){
            return true;
        }
        else if ( m_square < num ){
            left = left + 1;
        }
        else {
            right = mid - 1
        }
    }
    return false
};
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(17));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(16641));