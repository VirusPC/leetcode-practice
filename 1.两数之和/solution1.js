/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /** 枚举 */
    for(let p=0;p<nums.length;++p){
        for(let q=p+1; q<nums.length; ++q){
            if(nums[p] + nums[q] === target) return [p, q];
        }
    }
};