/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var search = function(nums, target) {
    let high = nums.length-1;
    let low = 0; 
    
    while (low <=high){
        let med = Math.floor((high+low)/2)
        if(nums[med]>target){
            high = med -1;
        }
        else if (nums[med]<target){
            low = med+1;
        }
        else {
            return med;
        }
    }
    return -1
};