/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row = board.length;
    let column = board[0].length;
    let path = new Set()
    
    let dfs = function(r,c,i) {
        if(i === word.length) {
            return true
        }
        if((r<0 || c<0) || (r >= row || c >= column) || word[i] !== board[r][c] || path.has(`${r}_${c}`)) {
            return false
        }
        path.add(`${r}_${c}`)
        let res = (dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1)  || dfs(r, c-1, i+1)) 
        path.delete(`${r}_${c}`)
        return res
    }

    for (let r=0; r<row; r++) {
        for(let c=0; c< column; c++ ) {
            if(dfs(r,c,0)) {
                return true
            }
        }
    }
    return false
};