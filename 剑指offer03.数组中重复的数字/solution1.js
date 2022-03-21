/**
 * 思路同 1.两数之和
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const map = new Map();
    for(let i=0; i<nums.length; ++i){
        if(map.has(nums[i])) return nums[i];
        map.set(nums[i], i);
    }
};