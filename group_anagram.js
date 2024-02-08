var groupAnagrams = function(strs) {
    const res = {}
    for(str of strs) {
        let count = new Array(26).fill(0)
        for (char of str) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)] =+ 1
        }
        if(count.toString() in  res) {
            res[count.toString()].append(str)
        } else {
            res[count.toString()] = [str]
        }
    }
    return Object.values(res)
};