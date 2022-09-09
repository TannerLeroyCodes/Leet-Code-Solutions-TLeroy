/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;

    const offset  = 'a'.charCodeAt();

    const charCount1 = new Array(26).fill(0);
    const charCount2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        let char1 = s1[i].charCodeAt() - offset;
        charCount1[char1]++;
        let char2 = s2[i].charCodeAt() - offset;
        charCount2[char2]++;
    }

    for (let i = 0; i <= s2.length - s1.length; i++){
        if (charCount1.join('') == charCount2.join('')){
            return true;
        }
        charCount2[s2.charCodeAt(i + s1.length) - offset]++;
        charCount2[s2.charCodeAt(i) - offset]--;
    }
    return false;

};