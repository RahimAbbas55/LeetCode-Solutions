/*VALID PARENTHESIS
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
*/
var isValid = function(s) {
    let stack = [];
    let bracketPairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < s.length; i++) {
        let currentBracket = s[i];
        // console.log(stack);
        if (currentBracket in bracketPairs) {
            // If it's an opening bracket, push it to the stack
            stack.push(currentBracket);
        } else {
            // If it's a closing bracket
            let lastOpenBracket = stack.pop();
            console.log(lastOpenBracket);
            // console.log(bracketPairs[lastOpenBracket]);
            if (bracketPairs[lastOpenBracket] !== currentBracket) {
                // If the last open bracket does not match the current closing bracket
                return false;
            }
        }
    }
    // If there are remaining brackets in the stack, the string is invalid
    return stack.length === 0;
};

console.log(isValid('{[]}'));