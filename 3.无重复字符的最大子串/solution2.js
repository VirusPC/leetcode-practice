/**
 * sliding window O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let p = 0;
    let q = 0;
    let maxLen = 0;
    const map = new Map();
    while(q<s.length){
        // insert a new element into sliding window
        const val = s[q];
        // adjust p
        if(map.has(val)) p = Math.max(p, map.get(val) + 1);
        // adjust maxLen
        maxLen = Math.max(maxLen, q-p+1);

        map.set(val, q);
        ++q;
    }
    return maxLen;
};