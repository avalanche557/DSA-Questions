/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a -b)
    let ans = []
    for(let i = 0; i < nums.length; i++) {
        
        if(i > 0 &&  nums[i] === nums[i-1]) continue;
        const temp = 0 - nums[i] 
        let l = i+1
        let r = nums.length -1;
        while (l < r) {
            if((nums[l] + nums[r]) < temp){
                l++
            } else if ((nums[l] + nums[r]) > temp) {
                r--
            } else {
                ans.push([nums[i], nums[l], nums[r]])
                while(nums[l] === nums[l+1]) l++;
                while(nums[r] === nums[r-1]) r--;
                l++;
                r--;
            }
            
        }
    }
    return ans
    
};