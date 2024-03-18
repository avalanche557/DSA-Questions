/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if(hand.length % groupSize) {
        return false
    }
    let map = new Map()
    for(let i = 0; i < hand.length; i++) {
        if(map.has(hand[i])) {
            map.set(hand[i], map.get(hand[i])+1)
        } else {
            map.set(hand[i], 1)
        }
    }
    //we need a sorted set to keep track of the minimum value at that place
    let sortedSet = [...new Set(hand)].sort((a,b) => b -a)
    while(sortedSet.length) {
        let smallestValue = sortedSet[sortedSet.length - 1];
        for(let i = smallestValue; i < smallestValue + groupSize; i++) {
            if(!map.has(i)) {
                return false
            }
            let val = map.get(i) - 1;
            map.set(i, val)
            if(!(map.get(i) === 0)) {
                continue;
            }
            if(!(i === sortedSet[sortedSet.length - 1])){
                return false
            }
            sortedSet.pop()

        }
    }
    return true
};