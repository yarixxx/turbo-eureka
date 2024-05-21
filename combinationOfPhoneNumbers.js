
const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
    };

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === "") {
        return [];
    }
    if (digits.length === 1) {
        return map[digits[0]]; // Letters
    }
    const combos = letterCombinations(digits.slice(1));
    return map[digits[0]].map((letter) => combos.map((combintaion) => letter + combintaion)).flat();
}
