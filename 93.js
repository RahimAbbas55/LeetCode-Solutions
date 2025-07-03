/*
    500. Keyboard Row
    Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
    Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.
    In the American keyboard:
        the first row consists of the characters "qwertyuiop",
        the second row consists of the characters "asdfghjkl", and
        the third row consists of the characters "zxcvbnm".
    Example 1:
        Input: words = ["Hello","Alaska","Dad","Peace"]
        Output: ["Alaska","Dad"]
        Explanation:
        Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.
    Example 2:
        Input: words = ["omk"]
        Output: []
    Example 3:
        Input: words = ["adsdf","sfd"]
        Output: ["adsdf","sfd"]
    Constraints:
        1 <= words.length <= 20
        1 <= words[i].length <= 100
        words[i] consists of English letters (both lowercase and uppercase). 
*/
var checkLetter = function(word){
    const keyBoardRows = [ 'qwertyuiop' , 'asdfghjkl' , 'zxcvbnm' ];
    const lowerWord = word.toLowerCase();
    for ( let i = 0 ; i < keyBoardRows.length ; i++ ){
        if( [...lowerWord].every( char => keyBoardRows[i].includes(char) ) ){
            return true;
        }
    }
    return false;
}

var findWords = function(words) {
   let ans = [];
   for ( let i = 0 ; i < words.length ; i++ ){
    if ( checkLetter(words[i]) ){
        ans.push(words[i]);
    }
   }
   return ans;
};
console.log(findWords(["Hello","Alaska","Dad","Peace"]))
console.log(findWords(["omk"]))
console.log(findWords(["adsdf","sfd"]))