/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0; r = height.length  - 1;
    let multiplier = height.length  - 1
    let maxArea = 0
    let currentMaxArea = 0
    while(l < r) {
       currentMaxArea = multiplier * Math.min(height[l], height[r])
       if(currentMaxArea > maxArea) {
           maxArea = currentMaxArea;
       }
       multiplier--;
       if(height[l] <= height[r]) {
           l++
       } else {
           r--
       }
    }
    return maxArea
};