/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 不含重复元素，利用hashmap可以将搜索元素的时间复杂度从O(n)降到O(1) 
    const map = new Map();
    for(let i=0; i<nums.length;++i){
        if(map.has(target-nums[i])) return [map.get(target-nums[i]), i];
        map.set(nums[i], i);
    }
};