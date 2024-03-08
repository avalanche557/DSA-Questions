/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    function dfs(i, curr, total) {
        if(total === target) {
            res.push([...curr])
            return
        }
        if(i >= candidates.length ||total > target )
        {
            return
        }
        //this is the case where we add the element and the run recusrssion 
        curr.push(candidates[i])
        dfs(i, curr, total+candidates[i])
        // this is the case where we don't add the value 
        curr.pop()
        dfs(i+1, curr, total)

        
    }
    dfs(0, [], 0)
    return res
};