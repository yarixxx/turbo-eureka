/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numSet = [];
    for (const n of nums) {
        if (numSet.indexOf(n) == -1) {
            numSet.push(n);
        }
    }
    nums.splice(0, nums.length, ...numSet);
    return numSet.length;
};
