// Stock Span Problem -Very famous interview question.

// Problem - For each day, find how many consecutive days the stock price was smaller or equal.

// Example:

// Input: [100, 80, 60, 70, 60, 75, 85]

// Output: [1, 1, 1, 2, 1, 4, 6]

// Dry Run

// For price = 75:
// Previous smaller prices:
// 60, 70, 60
// Span = 4


function stockSpan(prices) {

    let stack = [];
    let span = [];

    for (let i = 0; i < prices.length; i++) {

        while (
            stack.length &&
            prices[stack[stack.length - 1]]
            <= prices[i]
        ) {
            stack.pop();
        }

        if (stack.length === 0) {
            span[i] = i + 1;
        }
        else {
            span[i] =
                i - stack[stack.length - 1];
        }

        stack.push(i);
    }

    return span;
}

console.log(
    stockSpan(
        [100,80,60,75,61,75,85,90]
    )
);