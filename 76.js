/*
    463. Island Perimeter
        You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
        Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is 
        exactly one island (i.e., one or more connected land cells).The island doesn't have "lakes", meaning the water inside isn't 
        connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
    Example 1:    
        Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
        Output: 16
        Explanation: The perimeter is the 16 yellow stripes in the image above.
*/
var islandPerimeter = function(grid) {
    let perimeter = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) { // Land cell
                perimeter += 4;
                // Check the cell above
                if (i > 0 && grid[i - 1][j] === 1) {
                    perimeter -= 2; // Shared edge
                }

                // Check the cell to the left
                if (j > 0 && grid[i][j - 1] === 1) {
                    perimeter -= 2; // Shared edge
                }
            }
        }
    }
    return perimeter;
};

const grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
];
console.log(islandPerimeter(grid)); 
