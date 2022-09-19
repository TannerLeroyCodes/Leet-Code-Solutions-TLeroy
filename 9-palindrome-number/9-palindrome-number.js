/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    
    let reversedStr = ''
    let xStr = x.toString()
    
    for(let i of xStr){
        reversedStr = i + reversedStr
    }
     if (reversedStr == xStr){
         return true
     } else {
         return false 
     }
    
    
    
    
    
//     let reversed = x.toString().split('').reverse().join('')
    
//     if (reversed == x){
//         return true 
//     } else {
//         return false 
    // }
};