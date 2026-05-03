// 1. Factorial (Basic Recursion)
// Problem: Find factorial of n.

// Example:
// 5! = 5 × 4 × 3 × 2 × 1 = 120

Code:
function factorial(number) {
    // Base case
    if (number === 0 || number === 1) {
        return 1;
    }

    // Recursive case
    return number * factorial(number - 1);
}

console.log(factorial(5)); // 120


// How it works:
// factorial(5)
// = 5 * factorial(4)
// = 5 * 4 * factorial(3)
// = 5 * 4 * 3 * factorial(2)
// = 5 * 4 * 3 * 2 * factorial(1)
// = 120


// 2. Fibonacci Series
// Problem: Find nth Fibonacci number.

// Sequence:
// 0, 1, 1, 2, 3, 5, 8...

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8


// 3. Sum of First N Numbers
// Problem: Find sum from 1 to n.

// Example:
// 1+2+3+4+5 = 15

function sum(n) {
    if (n === 1) {
        return 1;
    }

    return n + sum(n - 1);
}

console.log(sum(5)); // 15

// 4. Reverse a String
// Problem: Reverse a string using recursion.

function reverseString(str) {
    if (str.length === 0) {
        return "";
    }

    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // olleh



// 5. Check Palindrome
// Problem: Check if string is palindrome.

function isPalindrome(str, start = 0, end = str.length - 1) {
    if (start >= end) {
        return true;
    }

    if (str[start] !== str[end]) {
        return false;
    }

    return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("madam")); // true


// 6. Power Function
// Problem: Find a^b

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    return base * power(base, exponent - 1);
}

console.log(power(2, 4)); // 16


// 7. Binary Search using Recursion
// Problem: Find element in sorted array.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }

    return binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([1,2,3,4,5,6], 5)); // 4


// 8. Generate All Subsets
// Problem: Print all subsets of a string.

// For "ab":
// "", "a", "b", "ab"
function subsets(str, current = "", index = 0) {
    if (index === str.length) {
        console.log(current);
        return;
    }

    // Include current character
    subsets(str, current + str[index], index + 1);

    // Exclude current character
    subsets(str, current, index + 1);
}

subsets("ab");


// 9. Permutations
// Problem: Print all permutations.

function permutation(str, answer = "") {
    if (str.length === 0) {
        console.log(answer);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        const remaining =
            str.slice(0, i) + str.slice(i + 1);

        permutation(remaining, answer + char);
    }
}

permutation("abc");


// 10. Tower of Hanoi Classic recursion problem.
function towerOfHanoi(n, source, helper, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    towerOfHanoi(n - 1, source, destination, helper);

    console.log(`Move disk ${n} from ${source} to ${destination}`);

    towerOfHanoi(n - 1, helper, source, destination);
}

towerOfHanoi(3, "A", "B", "C");