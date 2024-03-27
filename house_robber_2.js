/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0]
    }
    let withOutfirstElement = helper(nums.filter((item, index) => index !== 0))
    let withOutLastElement = helper(nums.filter((item, index) => index !== nums.length - 1))
    return Math.max(withOutfirstElement, withOutLastElement)
};

var helper = function(arr) {
    let rob1 = 0, rob2 = 0;
    for(let i = 0 ; i < arr.length; i++) {
        let temp = Math.max(arr[i]+rob1, rob2)
        rob1 = rob2,
        rob2 = temp
    }
    return rob2
}