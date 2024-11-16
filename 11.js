var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    // Iterate through characters of the first string
    for (let i = 0; i < strs[0].length; i++) {
        // Check if character at index i in first string is same for all strings
        for (let j = 1; j < strs.length; j++) {
            // If index i is greater than or equal to length of any string or character at index i is different, return substring up to i
            if (i >= strs[j].length || strs[j][i] !== strs[0][i]) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};

// Example usage:
console.log(longestCommonPrefix(["flower","flower","flower"]));
