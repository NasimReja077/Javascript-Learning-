class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {

    let prev = null;
    let current = head;

    while (current !== null) {

        // Save next node
        let next = current.next;

        // Reverse link
        current.next = prev;

        // Move pointers
        prev = current;
        current = next;
    }

    return prev;
}



function printList(head) {

    let current = head;

    while (current !== null) {
        process.stdout.write(
            current.data + " → "
        );

        current = current.next;
    }

    console.log("NULL");
}

let head = new Node(1);

head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("Original:");
printList(head);

head = reverseLinkedList(head);

console.log("Reversed:");
printList(head);