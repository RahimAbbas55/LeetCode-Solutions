/*

Pascal's Triangle II
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
*/
var getRow = function(numRows) {
    if (numRows <= 0) return []
    
    const triangle = [[1]]
    let ans = []
    for (let row = 1; row < numRows; row++) {
        const prevRow = triangle[row - 1]
        const newRow = [1]

        for (let col = 1; col < row; col++) {
            newRow[col] = prevRow[col - 1] + prevRow[col]
        }
        newRow.push(1)
        triangle.push(newRow)
    }
};
console.log(getRow(3));