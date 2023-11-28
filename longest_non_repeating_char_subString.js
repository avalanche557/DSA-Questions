var lengthOfLongestSubstring = function(s) {
    const subString = new Set()
    let l = 0
    let res = 0
    for(let r = 0; r < s.length; r++) {
        while(subString.has(s[r])){
            subString.delete(s[l])
            l++
        }
        subString.add(s[r])
    }
    if(subString.size > res) {
        res = subString.size
    }
    return res
}