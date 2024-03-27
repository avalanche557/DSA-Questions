/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0
    for(let i = 0; i < s.length; i++) {
        let left = i, right = i;
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            res = res + 1
            left = left -1 ;
            right = right + 1
        }
        left = i, right = i+1;
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            res = res + 1
            left = left -1 ;
            right = right + 1
        }
        
    }
    return res
};