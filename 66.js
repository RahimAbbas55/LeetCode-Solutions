/*
    387. First Unique Character in a String
    Given a string s, find the first non-repeating character in it and return its index.
     If it does not exist, return -1.

    Example 1:
        Input: s = "leetcode"
        Output: 0
        Explanation:
            The character 'l' at index 0 is the first character that does not occur at any other index.
    Example 2:
        Input: s = "loveleetcode"
        Output: 2
    Example 3:
        Input: s = "aabb"
        Output: -1

    Constraints:
        1 <= s.length <= 105
        s consists of only lowercase English letters.
*/
var firstUniqChar = function(s) {
    const hashMap = {};
    let letter , index = 0;
    for ( const c of s ){
        hashMap[c] = (hashMap[c] || 0) + 1;
    }
    for ( const c in hashMap ){
        if ( hashMap[c] === 1 ){
            letter = c;
            break;
        }
    }
    for ( const c of s ){
        if ( c === letter ){
            return index;
        }
        index++;
    }
    return -1
};
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("aabb"))