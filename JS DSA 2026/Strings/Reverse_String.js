function reverseString1(text) {
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

console.log(reverseString1("hello"));


// Two Pointer Approach

// Logic:
// One pointer starts from left.
// One pointer starts from right.
// Swap characters until both pointers meet.

// Complexity:
// Time = O(n)
// Space = O(n)


// 2. Pure Recursion Approach

// Good for recursion interviews.

// Code:
function reverseString2(text) {

    // Base case
    if (text.length <= 1) {
        return text;
    }

    return text[text.length - 1] + reverseString2(text.slice(0, -1));
}

console.log(reverseString2("hello3"));
// Complexity:
// Time = O(n)
// Space = O(n) (call stack)

// Built-in Method

// function reverseString3(text) {
//     return text
//         .split("")
//         .reverse()
//         .join("");
// }

// console.log(reverseString3("hello"));


// 4. Manual Loop 
function reverseString4(text) {

    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed;
}

console.log(reverseString4("hello5"));