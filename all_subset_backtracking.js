/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    let subset = []
    function dfs(i) {
        if(i >= nums.length){
            res.push([...subset])
            return
        }

        //case one where we append the element
        subset.push(nums[i])
        dfs(i+1)

        //case 2
        //where we don't append the element
        subset.pop()
        dfs(i+1)

    }
    dfs(0)
    return res
};