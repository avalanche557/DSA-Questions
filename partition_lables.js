/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    if(s.length === 0) {
        return [0]
    }
    //for storing the last index of that charater
    let map = new Map()
    let output = []
    for(let i = 0; i < s.length; i++) {
        map.set(s[i], i)
    }
    let size = 0
    let end = 0
    for(let i = 0; i < s.length; i++) {
        size = size+1;
        end = Math.max(end, map.get(s[i]))
        if(i === end) {
            output.push(size)
            size = 0;
            end = 0
        }
    }
    return output
};