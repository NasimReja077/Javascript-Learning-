// Minimum Stack (Min Stack)
// Problem
// Design a stack that supports:
// push(x)
// pop()
// top()
// getMin()

// All operations should work in O(1) time.


class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        this.stack.push(value);

        if (
            this.minStack.length === 0 ||
            value <= this.getMin()
        ) {
            this.minStack.push(value);
        }
    }

    pop() {
        let removed = this.stack.pop();

        if (removed === this.getMin()) {
            this.minStack.pop();
        }

        return removed;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[
            this.minStack.length - 1
        ];
    }
}

let s = new MinStack();

s.push(5);
s.push(2);
s.push(10);
s.push(1);

console.log(s.getMin()); // 1