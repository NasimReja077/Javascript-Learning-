// Fixed Size Sliding Windowjavascript

// Example: Maximum sum of subarray of size k
function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    
    // First window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Test
const arr = [2, 1, 5, 1, 3, 2, 1, 7];
console.log(maxSumSubarray(arr, 3)); // 11 (5+1+3)
