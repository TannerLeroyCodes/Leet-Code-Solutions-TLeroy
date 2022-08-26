/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = [];
    let low = 0,
        high = nums.length - 1;
    while(low <= high){
        const left = nums[low]**2,
              right = nums[high]**2;
        if(left > right){
            result.push(left);
            low++
        }
        else {
            result.push(right)
            high--;
        }
    }
    return result.reverse();
};