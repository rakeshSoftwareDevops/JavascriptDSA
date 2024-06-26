class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this;
    }

    pop() {
        if(this.size > 0) {
            var poppednode = this.first;
            this.first = poppednode.next;
        }
        if(size == 1) {
            this.last = null;
        }
        this.size--;
        return poppednode;
    }
}