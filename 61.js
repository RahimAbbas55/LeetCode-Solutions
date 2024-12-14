/*
    345. Reverse Vowels of a String
        Given a string s, reverse only all the vowels in the string and return it.
        The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

    Example 1:
        Input: s = "IceCreAm"
        Output: "AceCreIm"
    Explanation:
        The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
    Example 2:
        Input: s = "leetcode"
        Output: "leotcede"
    
    Constraints:
        1 <= s.length <= 3 * 105
        s consist of printable ASCII characters.
*/
var reverseVowels = function(s) {
    let vowelArr = [] , j = 0 ;
    s = s.split('');
    for ( let i = 0 ; i < s.length ; i++ ){
        if (( s[i] === 'a') || ( s[i] === 'e') || ( s[i] === 'i') || ( s[i] === 'o') || ( s[i] === 'u') || ( s[i] === 'A') || ( s[i] === 'E') || ( s[i] === 'I') || ( s[i] === 'O') || ( s[i] === 'U')){
            vowelArr.push(s[i]);
            
        }
    }
    vowelArr.reverse()
    for ( let i = 0 ; i < s.length ; i++ ){
        if (( s[i] === 'a') || ( s[i] === 'e') || ( s[i] === 'i') || ( s[i] === 'o') || ( s[i] === 'u') || ( s[i] === 'A') || ( s[i] === 'E') || ( s[i] === 'I') || ( s[i] === 'O') || ( s[i] === 'U')){
            s[i] = vowelArr[j];
            j++
        }
    }
    return s.join('')
};
console.log(reverseVowels('IceCream'))
console.log(reverseVowels('leetcode'));