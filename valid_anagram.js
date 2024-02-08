var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    } else {
        let sHashmap = {};
        let tHashmap = {}
        for(let i = 0; i < s.length;i++) {
            if(s[i] in sHashmap) {
                sHashmap[s[i]] = sHashmap[s[i]] + 1
            } else {
                sHashmap[s[i]] = 1
            }
            if(t[i] in tHashmap) {
                tHashmap[s[i]] = tHashmap[s[i]] + 1
            } else {
                tHashmap[s[i]] = 1
            }
        }
        for(item in sHashmap){
            if(sHashmap[item] !== tHashmap[item]) {
                return false
            }
        }
        return true
    }
};