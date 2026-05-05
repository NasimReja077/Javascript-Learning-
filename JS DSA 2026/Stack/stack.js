// 1. Implement Stack using Array
// Question: Create a stack with push, pop, peek, isEmpty.

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow";
        }

        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items);
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(70);
stack.push(60);
stack.push(50);
stack.push(80);
stack.push(65);
stack.push(90);

stack.display();
console.log(stack.pop());
console.log(stack.peek());