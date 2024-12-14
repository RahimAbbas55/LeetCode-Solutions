/*
    383. Ransom Note
    Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using 
    the letters from magazine and false otherwise.
    Each letter in magazine can only be used once in ransomNote.

    Example 1:
        Input: ransomNote = "a", magazine = "b"
        Output: false
    Example 2:
        Input: ransomNote = "aa", magazine = "ab"
        Output: false
    Example 3:
        Input: ransomNote = "aa", magazine = "aab"
        Output: true
    Constraints:
        1 <= ransomNote.length, magazine.length <= 105
        ransomNote and magazine consist of lowercase English letters.
*/
var canConstruct = function(ransomNote, magazine) {
    const hashMap1 = {} , hashMap2 = {};
    // convert both arrays in key value pair where key is array element and value is its occurence;
    for ( const character of ransomNote ){
        hashMap1[character] = ( hashMap1[character] || 0 ) + 1;
    }
    for ( const character of magazine ){
        hashMap2[character] = ( hashMap2[character] || 0 ) + 1;
    }
    for ( const char in  hashMap1 ){
        if ( !hashMap2[char] || hashMap1[char] > hashMap2[char] ){
            return false;
        }
    }
    return true;
};
// console.log(canConstruct('a' , 'ab'));
// console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));