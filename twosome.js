/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const comps = [];
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (comps.indexOf(nums[i]) > -1) {
        return [comps.indexOf(nums[i]), i];
      }
      comps[i] = complement;
    }

    return [];
};
