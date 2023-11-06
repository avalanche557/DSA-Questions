/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxL = height[0]
    let maxR = height[height.length - 1]
    let l = 0, r = height.length - 1;
    let sum = 0
    while(l < r) {
        if(height[l] < height[r]) {
            l++
            const temp = maxL - height[l]
            sum = sum + Math.max(temp, 0)
            if(height[l] > maxL) {
                maxL = height[l]
            }
        } else {
            r--;
            const temp = maxR - height[r]
            sum = sum + Math.max(temp, 0)
            if(height[r] > maxR) {
                maxR = height[r]
            }
        }
        
    }
    return sum
};