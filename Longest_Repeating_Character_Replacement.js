/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = {}
    let l = 0;
    let res = 0;
    for(let r = 0; r < s.length; r++) {
        if(count.hasOwnProperty(s[r])) {
            count[s[r]] = count[s[r]]  + 1
        } else {
            count[s[r]] = 1
        }
        let windowLen = r - l + 1;
        let maxFreq = Math.max(...Object.values(count))
        if(windowLen - maxFreq <= k) {
            res = Math.max(windowLen, res)
        } else {
            count[s[l]] = count[s[l]] - 1
            l--
        }
    }
    return res
}