/**
 * 已知元素范围，可以把元素值作为下标构建反向数组，比hashmap更快。
 * 但1.两数之和不知道元素范围，不能用反向数组，只能用hashmap。
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const arr = new Array(nums.length);
    for(let val of nums){
        if(arr[val]) return val;
        arr[val] = 1;
    }
};