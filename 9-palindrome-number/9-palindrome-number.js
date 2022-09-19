/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('')
    
    if (reversed == x){
        return true 
    } else {
        return false 
    }
};