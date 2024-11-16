/* 
    125. Valid Palindrome
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
    removing all non-alphanumeric characters, it reads the same forward and backward. 
    Alphanumeric characters include letters and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.

    Example 1:

    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

    Example 2:

    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

    Example 3:

    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.

*/
var palindromeCheck = function(s) {
    if ( s.length === 0 ) return false
    let right = s.length - 1
    for ( let left = 0 ; left < s.length ; left++ ){
        let x = s[left] , y = s[right - left]
        if ( x !== y ) return false
    }
    return true
}

var isPalindrome = function(s) {
    //temporary string to store converted string
    let tempStr = []
    //checking if string is empty
    if ( s.length === 0 ){
        return true;
    }
    //converting the string to required string
    for ( let i = 0 ; i < s.length ; i++ ){
        if ( ( s[i] >= 'A' && s[i] <= 'Z' ) || ( s[i] >= 'a' && s[i] <= 'z' ) || (( s[i] >= '0' && s[i] <= '9' ))){
            tempStr.push(s[i].toLowerCase())
        }
    }
    console.log(tempStr)
    //checking for palindrome
    return palindromeCheck(tempStr)  
};

console.log(isPalindrome('0P'))