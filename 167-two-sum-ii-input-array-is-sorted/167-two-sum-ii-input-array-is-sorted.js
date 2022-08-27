/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let low = 0;
    let high = numbers.length-1;
    while(low < high) {
          let sum = numbers[low]+numbers[high];
        if (sum > target){
            high--;
        } else if (sum < target){
            low++;
        } else{
            return [low+1, high+1]
        }
          }
};