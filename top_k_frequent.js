var topKFrequent = function(nums, k) {
    let map = {}
    let res = []
    let count = 0
    for(let num of nums) {
    	if(num in map) {
      	map[num] += 1 
      } else {
      	map[num] = 1 
      }
    }
    map = Object.entries(map).sort((a,b) => b[1] - a[1])
    for(let item of map) {
    	if(count < k) {
      	res.push(parseInt(item[0]))
        count++
      }
    }
    return res
};

console.log(topKFrequent([1,1,1,2,2,3], 2))