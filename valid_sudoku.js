/**
 * @param {character[][]} board
 * @return {boolean}
 */
 /*
 * r1_5
 * c1_5
 * b(1/3)_(1/3)_5
 */
 var isValidSudoku = function(board) {
    if(board.length === 0 || board === null) {
        return false
    }
    let set = new Set()
    for(let i = 0 ; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === ".") continue;
            let value = board[i][j]
            if(set.has(`r${i}_${value}`) || set.has(`c${j}+${value}`) || set.has(`b_${parseInt(i/3)}_${parseInt(j/3)}_${value}`)) 
            return false
            else {
                set.add(`r${i}_${value}`)
                set.add(`c${j}+${value}`)
                set.add(`b_${parseInt(i/3)}_${parseInt(j/3)}_${value}`)
            }
        }
    }
    return true
};