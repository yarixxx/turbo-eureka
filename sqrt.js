/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    const rt = findNearestSqrt(x, 2);
    return Math.floor(x / rt);
};

function findNearestSqrt(x, p) {
    if (x <= p * p) {
        return p;
    } else {
        return findNearestSqrt(x, p + 1);
    }
}
