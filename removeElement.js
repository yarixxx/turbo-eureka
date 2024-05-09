/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let k = 0;
   while (nums.indexOf(val) > -1) {
    nums.splice(nums.indexOf(val), 1);
    k++;
   }
   return nums.length;
};
