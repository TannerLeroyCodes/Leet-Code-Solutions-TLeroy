/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let obj = {}
  let result = []
  
  //make hashmap of first array of nums
  
  for (let i of nums1){
      if (!obj[i]){
          obj[i] = 1
      } else {
          obj[i]++
      }
  }
  
  // loop through second array of ums to see if the hashmap has a count of the value
  
    for (let i of nums2){
        if (obj[i] > 0){
            result.push(i)
            obj[i]--
        }
    }
  return result
};