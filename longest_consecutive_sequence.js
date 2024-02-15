/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let l = 0; r = 0;
    let res = 0
    while(r < s.length) {
        if(!set.has(s[r])) {
            set.add(s[r])
            res = Math.max(set.size, res)
            r++
        } else {
            set.delete(s[l])
            l++
        }
    }
    return res

};