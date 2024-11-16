/*LENGTH OF LAST WORD
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

E.G:
Example 1:
    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.

Example 2:
    Input: s = "   fly me   to   the moon  "
    Output: 4
    Explanation: The last word is "moon" with length 4.
    
Example 3:
    Input: s = "luffy is still joyboy"
    Output: 6
    Explanation: The last word is "joyboy" with length 6.
*/
var lengthOfLastWord = function(s) {
    //approach 1
    // let size = 0;
    // let lastWord = '';
    // console.log(s.length);
    // for (let i = s.length - 1; i >= 0; i--) {
    //     if (s[i] !== ' ') {
    //         lastWord = s[i] + lastWord;
    //         console.log(lastWord);
    //     } 
    //     else if (lastWord !== '') {
    //         size = lastWord.length;
    //         break;
    //     }
    // }
    // if (size === 0 && lastWord !== '') {
    //     size = lastWord.length;
    // }
    //approach 2
    let temp = s.trim();
    let arr = temp.split(' ');
    let size = arr[arr.length - 1].length
    return size;
};
console.log(lengthOfLastWord('a'));
