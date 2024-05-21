/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n == 1) {
        return ['()'];
    }
    if (n > 1) {
        const parts = generateParenthesis(n - 1);
        let result = [];
        for (let p of parts) {
            result.push(`(${p})`);
            result.push(`()${p}`);
            result.push(`${p}()`);
        } 
        return [... new Set(result)];
    }
};
