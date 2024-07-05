class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(position) {
        if (position < 0 || position >= this.length) return undefined;
        var current;
        var count;
        if (position <= this.length / 2) {
            current = this.head;
            count = 0;
            while (count !== position) {
                current = current.next;
                count++;
            }
        } else {
            current = this.tail;
            count = this.length - 1;
            while (count !== position) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(position, value) {
        var node = this.get(position);
        if (node) {
            node.value = value;
            return node;
        }
        return undefined;
    }

    insertAtPosition(position, value) {
        if (position < 0 || position > this.length) return undefined;
        if (position === 0) return this.unshift(value);
        if (position === this.length) return this.push(value);

        var newNode = new Node(value);
        var beforeNode = this.get(position - 1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return this;
    }

    removeAtPosition(position) {
        if (position < 0 || position >= this.length) return undefined;
        if (position === 0) return this.shift();
        if (position === this.length - 1) return this.pop();

        var removedNode = this.get(position);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }
}

// Example usage:
var DLI = new DoubleLinkedList();
DLI.push(10);
DLI.push(20);
DLI.push(30);
console.log(DLI);
