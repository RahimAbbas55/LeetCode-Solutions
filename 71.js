/* 
    434. Number of Segments in a String
    Given a string s, return the number of segments in the string.
    A segment is defined to be a contiguous sequence of non-space characters.

    Example 1:
        Input: s = "Hello, my name is John"
        Output: 5
        Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
    Example 2:
        Input: s = "Hello"
        Output: 1
    Constraints:
        0 <= s.length <= 300
        s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
*/
var countSegments = function(s) {
    let segments = s.split(' ').filter(segment => segment.trim() !== '');
    return segments.length;
};
console.log(countSegments("Hello, my name is John")); 
console.log(countSegments("Hello")); 
console.log(countSegments("")); 
console.log(countSegments("   Hello   world   ")); 
console.log(countSegments("      "));