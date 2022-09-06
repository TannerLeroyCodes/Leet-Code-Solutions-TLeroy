/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    const seen = new Map();
    let slow = 0;
    let maxLength = 0;
    
    for (let i=0; i< s.length; i++){
        if(seen.has(s[i])){
            slow = Math.max(seen.get(s[i])+1, slow);
        }
        seen.set(s[i],i);
        
        maxLength = Math.max(i-slow +1, maxLength);
    }
    
    return maxLength
    
};