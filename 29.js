/* 
    Pascal's Triangle
Easy
Topics
Companies
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

*/
var generate = function(numRows) {
    if (numRows <= 0) return [];
    
    const triangle = [[1]];

    for (let row = 1; row < numRows; row++) {
        const prevRow = triangle[row - 1];
        const newRow = [1];

        for (let col = 1; col < row; col++) {
            newRow[col] = prevRow[col - 1] + prevRow[col];
        }

        newRow.push(1);
        triangle.push(newRow);
    }

    return triangle;  
};