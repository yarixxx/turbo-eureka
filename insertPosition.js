/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.indexOf(target) != -1) {
        return nums.indexOf(target);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - target > 0) {
            return i;
        }
    }
    return nums.length;
};
