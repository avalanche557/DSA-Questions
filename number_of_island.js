/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    let rows = grid.length;
    let columns = grid[0].length;
    for(let r = 0 ; r< rows; r++) {
        for(let c = 0; c < columns; c++) {
            if(grid[r][c] === "1") {
                count++
                changeToWater(grid, r, c)
            }
        }
    }
    return count;
};

const changeToWater = (grid, rowIndex, columnIndex) => {
    if(grid[rowIndex] === undefined || grid[rowIndex][columnIndex] === undefined || grid[rowIndex][columnIndex]=== "0") {
        return ;
    }
    grid[rowIndex][columnIndex] = '0';
    changeToWater(grid, rowIndex+1, columnIndex)
    changeToWater(grid, rowIndex-1, columnIndex)
    changeToWater(grid, rowIndex, columnIndex+1)
    changeToWater(grid, rowIndex, columnIndex-1)
}