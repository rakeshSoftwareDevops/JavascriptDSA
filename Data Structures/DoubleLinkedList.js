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
        if(!this.head) {
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
        if(!this.length) return undefined;
        else if(this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            var poppedNode = this.tail;
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if(!this.length) return undefined;
         else if(this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            var poppedNode = this.head;
            this.head = poppedNode.next;
            this.head.prev = null;
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }

    unshift(val) {
        if(!val) return undefined;
        var newNode = new Node(val);
        if(!this.head) {
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
        if(!this.head) return undefined;
        else if(position > this.length) return undefined;
        else {
            var count = 1;
            var current = this.head;
            while(count !== position) {
                current = current.next;
                count++;
            }
            return current;
        }
    }

    // We can also use get method to do the performance enhancement
    set(position , value) {
        if(!this.head || !value || !position) return undefined;
        else if(position > this.length) return undefined;
        else {
            var count = 1;
            var current = this.head;
            while(count !== position) {
                current = current.next;
                count++;
            }
            current.value = value;
            return current;
        }
    }

    insertAtPosition(position, value) {
        if(!this.head || !value || !position) return undefined;
        else if(position > this.length) return undefined;
        else if(position == 1) {
            return this.unshift(value);
        } else if(position == this.length) {
            return this.push(value);
        } else {
            var newNode = new Node(value);
            var previousNode = this.get(position-1);
            var nextNode = this.get(position);
            newNode.prev = previousNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            previousNode.next = newNode;
        }
        this.length++;
        return this;
    }

    removeAtPosition(position) {
        if(!this.head || !position) return undefined;
        else if(position > this.length) return undefined;
        else if(position == 1) {
            return this.shift();
        } else if(position == this.length) {
            return this.pop();
        } else {
            var previousNode = this.get(position-1);
            var nextNode = this.get(position+1);
            var currentNode = this.get(position);
            previousNode.next = nextNode;
            nextNode.prev = previousNode;
            currentNode.prev = null;
            currentNode.next = null;
        }
        this.length--;
        return this;
    }
}

var DLI = new DoubleLinkedList();
DLI.push(10);
DLI.push(20);
DLI.push(30);
// console.log(DLI);