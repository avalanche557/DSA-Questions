/**
 * @param {number[]} height
 * @return {number}
 */
 //
 var maxArea = function(height) {
    if(height === null || height.length === 0) {
        return 0
    }
    let left = 0, right = height.length - 1;
    let maxArea = 0
    while(left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, area)
        if(height[left] < height[right]){
            left++
        } else {
            right--;
        }
    }
    return maxArea
};