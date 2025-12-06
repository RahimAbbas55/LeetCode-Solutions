/*
    859. Buddy Strings
        Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
        Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
        For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
    Example 1:
        Input: s = "ab", goal = "ba"
        Output: true
        Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
    Example 2:
        Input: s = "ab", goal = "ab"
        Output: false
        Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
    Example 3:
        Input: s = "aa", goal = "aa"
        Output: true
        Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
    Constraints:
        1 <= s.length, goal.length <= 2 * 104
        s and goal consist of lowercase letters.
*/
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    let difference = [];
    // if both strings length differ, return false
    if (s.length !== goal.length) return false;

    // if both strings are equal
    if (s === goal) {
        // check for duplicate chars
        let seen = new Set();
        for (let char of s) {
            if (seen.has(char)) return true // duplicate found , can swap
            seen.add(char);
        }
        return false; // no duplicate , can't swap
    }

    // Step 3: Find positions where they differ
    for (let i = 0 ; i < s.length ; i++){
        if (s[i] !== goal[i]) difference.push(i)
    }

    // Step 4: Check if exactly 2 differences and they can be swapped
    if (difference.length === 2){
        let i = difference[0] ;
        let j = difference[1];
        return s[i] === goal[j] && s[j] === goal[i]
    }
    return false;
};
console.log(buddyStrings("ab", "ba"));