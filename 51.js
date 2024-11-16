/* 
    242. Valid Anagram
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
    typically using all the original letters exactly once.

    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false
*/
var isAnagram = function(s, t) {
    // Convert the string `s` into a key-value pair with key being the character and the value being its count
    let obj1 = Array.from(s).reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc; 
    }, {});

    // Iterate through string `t` and decrement the count of corresponding characters in `obj1`
    for (let i = 0; i < t.length; i++) {
        // Check if the character exists in the frequency map and its count is greater than 0
        if (obj1[t[i]]) {
            obj1[t[i]]--; // Decrement the count for the character
        } else {
            // If the character does not exist in the map or the count is already 0, return false
            return false;
        }
    }

    // Final check: If all counts are 0, return true; otherwise, return false
    for (let key in obj1) {
        if (obj1[key] !== 0) return false;
    }

    return true;
};
console.log(isAnagram('anagram' , 'nagaram'))
console.log(isAnagram('rat' , 'car'))