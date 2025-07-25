/*
    709. To Lower Case
    Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
    Example 1:
        Input: s = "Hello"
        Output: "hello"
    Example 2:
        Input: s = "here"
        Output: "here"
    Example 3:
        Input: s = "LOVELY"
        Output: "lovely"
    Constraints:
        1 <= s.length <= 100
        s consists of printable ASCII characters.
*/
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let result = '';
    for ( let i = 0 ; i < s.length ; i++ ){
        let code = s.charCodeAt(i)
        if ( code >= 65  && code <= 90 ){
            result += String.fromCharCode( code + 32 );
        } else {
            result += s[i]
        }
    }
    return result
};
console.log(toLowerCase('Hello'))