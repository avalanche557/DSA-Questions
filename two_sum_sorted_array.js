//Two Sum II - Input Array Is Sorted
//Input: numbers = [2,7,11,15], target = 9
//Output: [1,2]
//Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let lPointer = 0; 
    let rPointer = numbers.length - 1
    while(lPointer < rPointer) {
        let sum = numbers[lPointer] + numbers[rPointer];
        console.log(sum)
        if(sum > target) {
            rPointer--;
        } else if (sum < target) {
            lPointer++
        } else {
            return [lPointer+1, rPointer+1]
        }
    }
};