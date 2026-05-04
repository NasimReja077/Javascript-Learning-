function reverseString(text) {
    let chars = text.split("");

    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        // Swap
        [chars[left], chars[right]] =
        [chars[right], chars[left]];

        left++;
        right--;
    }

    return chars.join("");
}

console.log(reverseString("hello"));


// Two Pointer Approach

// Logic:
// One pointer starts from left.
// One pointer starts from right.
// Swap characters until both pointers meet.

// Complexity:
// Time = O(n)
// Space = O(n)