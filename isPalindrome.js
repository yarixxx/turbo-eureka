/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const sx = (x + "").split("");
    for (let i = 0; (i < sx.length/2); i++) {
        if (sx[i] !== sx[sx.length - i - 1]) {
            return false;
        }
    }
    return true;
};
