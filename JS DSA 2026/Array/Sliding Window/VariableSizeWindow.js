// Variable Size Sliding Windowjavascript

// Example: Longest subarray with sum <= target
function longestSubarray(arr, target) {
    let left = 0;
    let sum = 0;
    let maxLen = 0;
    
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        
        // Shrink window from left if condition violated
        while (sum > target && left <= right) {
            sum -= arr[left];
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
