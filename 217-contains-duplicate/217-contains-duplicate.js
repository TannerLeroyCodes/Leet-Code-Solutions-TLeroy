/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    // add input to memory
    // check if element in array is already stored in memory 
        // if item is never seen before, put in memory
        //if item is seen, return true 
    
    let memory = {};
    
    for(let i=0; i< nums.length; i++){
        if(memory[nums[i]] === undefined){
            memory[nums[i]] = i;
        } else {
            return true;
        }
    }
    return false;
    
};


//time complexity = O(n)
//space complexity = O(n)