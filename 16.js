/* FIND INDEX OF FIRST OCCURENCE IN A STRING
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
E.G:
    Example 1:
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.

    Example 2:
    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/
var strStr = function(haystack, needle) {
    let idx = haystack.indexOf(needle);
    if ( idx !== -1 ){
        return idx;
    }
    else {
        return -1;
    }
};
console.log(strStr('sadbutsad' , 'sad'));
console.log(2 - (2 - 1));