/*
    22. Generate Parentheses
        Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
    Example 1:
        Input: n = 3
        Output: ["((()))","(()())","(())()","()(())","()()()"]
    Example 2:
        Input: n = 1
        Output: ["()"]
    Constraints:
        1 <= n <= 8
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = [] , res = [];
    const backtrack = (openC , closeC) => {
        // base case
        if ( openC === n && closeC === n ){
            res.push(stack.join(''));
            return;
        }
        // only add ( parenthesis when openC count is less than n
        if ( openC < n ){
            stack.push('(');
            backtrack(openC + 1 , closeC);
            stack.pop();
        }
        if ( closeC < openC ){
            stack.push(')');
            backtrack(openC , closeC + 1);
            stack.pop()
        }
    }
    backtrack(0 , 0)
    return res;
};
console.log(generateParenthesis(3));