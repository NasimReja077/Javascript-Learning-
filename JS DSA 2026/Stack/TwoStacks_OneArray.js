// Implement Two Stacks in One Array
// Problem- Use one array to create two stacks.

// Idea
// Stack 1 grows from left → right
// Stack 2 grows from right → left

// Example:
// [10,20,_,_,_,90,80]
//  ↑               ↑
// top1           top2



class TwoStacks {

    constructor(size) {
        this.arr = new Array(size);

        this.top1 = -1;
        this.top2 = size;

        this.size = size;
    }

    push1(value) {

        if (this.top1 < this.top2 - 1) {
            this.arr[++this.top1] = value;
        }
        else {
            console.log("Overflow");
        }
    }

    push2(value) {

        if (this.top1 < this.top2 - 1) {
            this.arr[--this.top2] = value;
        }
        else {
            console.log("Overflow");
        }
    }

    pop1() {

        if (this.top1 >= 0) {
            return this.arr[this.top1--];
        }

        return "Underflow";
    }

    pop2() {

        if (this.top2 < this.size) {
            return this.arr[this.top2++];
        }

        return "Underflow";
    }
}

let ts = new TwoStacks(10);

ts.push1(10);
ts.push1(20);
ts.push1(30);

ts.push2(90);
ts.push2(80);

console.log(ts.arr);