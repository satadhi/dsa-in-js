/**
 * @description **424. Longest Repeating Character Replacement**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let freq = new Array(26).fill(0);
    let left = 0;
    let maxFreq = 0;
    let maxLen = 0;

    for(let right = 0; right < s.length; right++) {
        const idx = s.charCodeAt(right) - 65;
        freq[idx]++;
        maxFreq = Math.max(maxFreq, freq[idx]);

        // if replacements needed > k, shrink window
        while( (right - left + 1) - maxFreq > k) {
            freq[s.charCodeAt(left) - 65]--;
            left++;
        }
            maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen

};