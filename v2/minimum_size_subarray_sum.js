/**
 * @description 10.  **209. Minimum Size Subarray Sum**  
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    let left = 0;
    let tempSum = 0;
    let finalMin = Infinity;
    for (let i = 0; i < nums.length; i++) {
        tempSum += nums[i];
        if (tempSum >= target) {
            while (tempSum >= target) {
                finalMin = Math.min(finalMin, i - left + 1);
                tempSum -= nums[left];
                left++;
            }
        }
    }

    return finalMin === Infinity ? 0 : finalMin;
};