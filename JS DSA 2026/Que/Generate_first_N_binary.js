function generateBinaryNumbers(n) {

    let queue = [];
    let result = [];

    // Start with 1
    queue.push("1");

    for (let i = 0; i < n; i++) {

        // Remove front element
        let current = queue.shift();

        // Store answer
        result.push(current);

        // Add next numbers
        queue.push(current + "0");
        queue.push(current + "1");
    }

    return result;
}

console.log(
    generateBinaryNumbers(5)
);