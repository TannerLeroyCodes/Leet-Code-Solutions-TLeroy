/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //iterate through array and do something
        //if nums[a] + nums[b] = target => output array with their indexes [a,b]
    
  let map = new Map();
    for (let i=0; i < nums.length; i++){
        let num1 = nums[i];
        let num2 = target - num1;
        if(map.has(num2)){
            return [i, map.get(num2)];
        }
        map.set(num1, i)
    }
    
    
    
    
};