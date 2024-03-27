/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = "";
    let resLength = 0
    for(let i = 0 ; i < s.length; i++) {
        let left = i, right = i;
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            if((right-left+1) > resLength) {
                resLength = right-left+1
                res = s.substring(left, right+1)
            }
            left = left - 1;
            right = right + 1
        } 
        left = i, right = i+1
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            if((right-left+1) > resLength) {
                resLength = right-left+1
                res = s.substring(left, right+1)
            }
            left = left - 1;
            right = right + 1
        } 
    }
    return res
};