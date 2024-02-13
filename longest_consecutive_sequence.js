/**
 * @param {number[]} nums
 * @return {number}
 * [100, 4, 200, 1, 3, 2]
 */

var longestConsecutive = function(nums) {
    if(nums === null || nums.length === 0){
        return 0
    }
    let set = new Set(nums);
    let maxLength = 1;
    for (let num of set) {
        if(set.has(num - 1)) continue;
        let currentNum = num
        let currentMax = 1
        while(set.has(currentNum + 1)) {
            currentNum++
            currentMax++
        }
        maxLength = Math.max(currentMax, maxLength)
    }
    return maxLength;
};