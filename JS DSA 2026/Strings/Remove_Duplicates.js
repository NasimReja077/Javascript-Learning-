// Problem 1: Remove Duplicate Characters from String

// Method 1: Using Set (Easy)

function removeDuplicates(str) {
    return [...new Set(str)].join("");
}

console.log(removeDuplicates("banana")); 
// Complexity:
// Time: O(n)
// Space: O(n)

// Method 2: Using Hash Map (Interview Friendly)
function removeDuplicates(str) {

    let seen = {};
    let result = "";

    for (let char of str) {

        if (!seen[char]) {
            seen[char] = true;
            result += char;
        }
    }

    return result;
}

console.log(removeDuplicates("banana123"));
// Dry Run:

// Input = "banana"

// b → not seen → add
// a → not seen → add
// n → not seen → add
// a → already seen → skip
// n → already seen → skip
// a → already seen → skip

// Method 3: Two Pointer Style

function removeDuplicates(str) {

    let chars = str.split("");
    let result = [];

    for (let i = 0; i < chars.length; i++) {

        if (!result.includes(chars[i])) {
            result.push(chars[i]);
        }
    }

    return result.join("");
}

console.log(removeDuplicates("banaana5"));

// Problem 2: Remove Duplicates from Sorted Array - Best Interview Approach (Two Pointers)

// Input: [1,1,2,2,3,4,4]

function removeDuplicates(arr) {

    if (arr.length === 0) {
        return [];
    }

    let i = 0;

    for (let j = 1; j < arr.length; j++) {

        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return arr.slice(0, i + 1);
}

console.log(removeDuplicates([1,1,2,2,3,4,4,66,66,77,77]));