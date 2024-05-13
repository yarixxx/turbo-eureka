/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return calculateSteps(n, 1) + calculateSteps(n, 2);
};

function calculateSteps(n, steps) {
    if (n - steps == 0) {
        return 1;
    }
     if (n - steps < 0) {
        return 0;
    }
    return calculateSteps(n - steps, 1) + calculateSteps(n - steps, 2);
}
