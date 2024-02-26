/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let ROW = matrix.length
    let COL = matrix[0].length
    let top = 0;
    let bottom = ROW - 1
    while(top <= bottom) {
        let row = Math.floor((top+bottom) / 2)
        if(target < matrix[row][0]) {
            bottom = row - 1
        } else if(target > matrix[row][COL - 1]) {
            top = row + 1
        } else {
            break
        }
    }
    if(!(top <= bottom)){
        return false
    }
    let row = Math.floor((top+bottom)/ 2)
    let left = 0, right = COL -1
    while(left <= right) {
        let mid = Math.floor((left+right)/ 2)
        if(target > matrix[row][mid]) {
            left = mid + 1;
        } else if(target < matrix[row][mid]) {
            right = mid - 1
        } else if (target === matrix[row][mid]){
            return true
        }
    }
    return false
    
};