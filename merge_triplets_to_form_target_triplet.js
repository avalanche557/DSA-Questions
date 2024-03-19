/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let set = new Set()
    for(triplet of triplets) {
        //remove the triplet if any value is greater then the target value at that index
        if(triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2] ){
            continue;
        }
        for(let i = 0; i < triplet.length; i++) {
            if(triplet[i] === target[i]) {
                set.add(i)
            }
        }
    }
    if( set.size === 3) {
        return true
    }
    return false
};