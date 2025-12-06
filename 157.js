/*
    844. Backspace String Compare
        Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
        '#' means a backspace character.
        Note that after backspacing an empty text, the text will continue empty.
    Example 1:
        Input: s = "ab#c", t = "ad#c"
        Output: true
        Explanation: Both s and t become "ac".
    Example 2:
        Input: s = "ab##", t = "c#d#"
        Output: true
        Explanation: Both s and t become "".
    Example 3:
        Input: s = "a#c", t = "b"
        Output: false
        Explanation: s becomes "c" while t becomes "b".
    Constraints:
        1 <= s.length, t.length <= 200
        s and t only contain lowercase letters and '#' characters.
    Follow up: Can you solve it in O(n) time and O(1) space?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    // O(n) time and space approach
    // const textEditor = (str) => {
    //     let result = "";
    //     for( let s of str ){
    //         if ( s === '#' ){
    //             result = result.slice(0 , -1)
    //         } else {
    //             result += s;
    //         }
    //     }

    //     return result;
    // }
    // return (textEditor(s) === textEditor(t))

    // O(n) time & O(1) space approach
    let i = s.length - 1;  // pointer for string s
    let j = t.length - 1;  // pointer for string t
    
    while (i >= 0 || j >= 0) {
        // Find next valid character in s
        i = getNextValidChar(s, i);
        // Find next valid character in t
        j = getNextValidChar(t, j);
        
        // Compare characters
        if (i >= 0 && j >= 0) {
            if (s[i] !== t[j]) return false;
        } else if (i >= 0 || j >= 0) {
            // One string has characters left, other doesn't
            return false;
        }
        
        i--;
        j--;
    }
    
    return true;
};

// Helper function for O(n) & O(1) time and space complexity
function getNextValidChar(str, index) {
    let skipCount = 0;
    
    while (index >= 0) {
        if (str[index] === '#') {
            skipCount++;
            index--;
        } else if (skipCount > 0) {
            skipCount--;
            index--;
        } else {
            break;  // Found a valid character
        }
    }
    
    return index;
}
console.log(backspaceCompare("ab#c" , "ad#c"));
console.log(backspaceCompare("ab#c" , "ad#c"));