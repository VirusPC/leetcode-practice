/**
 * 穷举 O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    for(let i=0; i<s.length; ++i){
        const map = new Map();
        let len = 0;
        for(let j=i; j<s.length; ++j){
            if(map.has(s[j])) break;
            map.set(s[j], true);
            ++len;
        }
         max = max>=len? max:len;
    }
    return max;
};