/* 
    171. Excel Sheet Column Number
    Given a string columnTitle that represents the column title as appears in an Excel sheet, 
    return its corresponding column number.
    For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
    
    Example 1:
    Input: columnTitle = "A"
    Output: 1
*/


var titleToNumber = function(columnTitle) {
    let columnNumber = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let charValue = columnTitle.charCodeAt(i) - 65 + 1;
        columnNumber = columnNumber * 26 + charValue;
    }
    return columnNumber;
};

// Example Usage:
console.log(titleToNumber("A"));    // Output: 1
console.log(titleToNumber("AB"));   // Output: 28
console.log(titleToNumber("ZY"));   // Output: 701
console.log(titleToNumber("ZZ"));   // Output: 702
console.log(titleToNumber("AAA"));  // Output: 703
