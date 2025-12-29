/**
 * @description 12.  **567. Permutation in String**  
 * @param {*} s1 
 * @param {*} s2 
 * @returns 
 */
var checkInclusion = function(s1, s2) {
    let s1Freq = {};

    for (let ch of s1) {
        s1Freq[ch] = (s1Freq[ch] || 0) + 1;
    }

    let left = 0;
    let need = s1.length;

    for (let i = 0; i < s2.length; i++) {
        const ch = s2[i];

        if (s1Freq[ch] !== undefined) {
            if (s1Freq[ch] > 0) need--;
            s1Freq[ch]--;
        }

        while (i - left + 1 > s1.length) {
            const leftChar = s2[left];
            if (s1Freq[leftChar] !== undefined) {
                if (s1Freq[leftChar] >= 0) need++;
                s1Freq[leftChar]++;
            }
            left++;
        }

        if (need === 0) return true;
    }

    return false;
};
