class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }

        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    rear() {
        return this.items[
            this.items.length - 1
        ];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.dequeue());