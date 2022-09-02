/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    const temp = s.split(' ')
    return temp.map(word => word.split('').reverse().join('')).join(' ')
};