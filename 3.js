/*
    3. Longest Substring Without Repeating Characters
    Given a string s, find the length of the longest 
    substring without repeating characters.
*/

var lengthOfLongestSubstring = function(s) {
    const visited = new Array(128).fill(0); // Initialize an array to store whether each character has been visited
    let maxLength = 0;  // Initialize the maximum length of substring
    let startIndex = 0;  // Start index of the current substring

    for (let endIndex = 0; endIndex < s.length; endIndex++) {
        const charCode = s.charCodeAt(endIndex);
    
        while (visited[charCode] === 1) {
            visited[s.charCodeAt(startIndex)] = 0;
            startIndex++;
        }

        visited[charCode] = 1; 

        maxLength = Math.max(maxLength, endIndex - startIndex + 1); 
    }

    return maxLength;
};