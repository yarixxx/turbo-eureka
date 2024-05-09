/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = [...s.matchAll(/\w+/g)];
    const lastWord = words[words.length - 1][0];
    return lastWord.length;
};
