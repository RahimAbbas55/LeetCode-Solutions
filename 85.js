/*
    409. Longest Palindrome
    Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
    Letters are case sensitive, for example, "Aa" is not considered a palindrome.

    Example 1:
        Input: s = "abccccdd"
        Output: 7
        Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
    Example 2:
        Input: s = "a"
        Output: 1
        Explanation: The longest palindrome that can be built is "a", whose length is 1.
    Constraints:
    1 <= s.length <= 2000
    s consists of lowercase and/or uppercase English letters only.
*/
var longestPalindrome = function(s) {
    let freq = {};  // to store character frequencies
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let length = 0;
    let hasOdd = false;

    for (let count of Object.values(freq)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1; // take the even part
            hasOdd = true;
        }
    }

    // Add 1 if there's any character with an odd count (central character)
    return hasOdd ? length + 1 : length;
};
console.log(longestPalindrome("abccccdd"));  // Output: 7
console.log(longestPalindrome("a"));         // Output: 1
console.log(longestPalindrome("Aa"));        // Output: 1 (case-sensitive)
console.log(longestPalindrome("aaBB"));      // Output: 4