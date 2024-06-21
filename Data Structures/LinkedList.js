class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class singleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data) {
        var newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next !== null) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        newTail.next = null;
        this.length--;
        if(this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //Remove items from the beginning of the list
    shift() {
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length == 0) {
            this.tail = null;
        }
        return current;
    }

    //Add items to the beginning of the list
    unshift(data) {
        var newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Get the data as per the current index
    get(index) {
        if(index <=0 || index > this.length) return;
        let current = this.head;
        let counter = 1;
        while(counter < index) {
            current = current.next;
            counter = counter + 1;
        }
        return current; 
    }

    //set the data just by passing index and newvalue
    set(index,newval) {
        if(index <=0 || index > this.length) return;
        let current = this.head;
        let counter = 1;
        while(counter < index) {
            current = current.next;
            counter = counter + 1;
        }
        current.data = newval;
        return current; 
    }

    //Insert the value into particular index for particular value
    insertInto(index,newval) {
        if(index <=0 || index > this.length || !this.head) return;
        var newNode = new Node(newval);
        if(index == 1) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
                var current = this.head;
                var initial = this.head;
                let counter = 1;
                while(counter < index) {
                    counter = counter + 1;
                    initial = current;
                    current = current.next;
                }
                newNode.next = current;
                initial.next = newNode;
        }
        this.length++;
        return this;
    }

    //Insert into method with efficient time complexity
    insertIntoEffecient(index,val) {
         if(index < 0 || index > this.length) return false;
         if(index === this.length) return !!this.push(val);
         if(index === 0) return !!this.unshift(val);

         var newNode = new Node(val);
         var prev = this.get(index - 1);
         var temp = prev.next;
         prev.next = newNode;
         newNode.next = temp;
         this.length++;
         return true;
    }
    removeElements(index) {
        if(index < 0 || index > this.length) return false;
        var prevNode = this.get(index-1);
        var currentNode = this.get(index);
        var nextNode = this.get(index+1);
        if(index == 1) {
            this.head = nextNode;
        } else if(index == this.length) {
            prevNode.next = null;
            this.tail = prevNode;
        } else {
             prevNode.next = nextNode;
             currentNode = null;    
        }
        this.length--;
        return true;
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0;i < this.length;i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    
}

var li = new singleLinkedList();
li.push('Hello');
li.push('world');
li.push('here');
li.push('there');
li.traverse();
//li.pop();
//li.shift();
li.get(3);
li.set(1,'No Hello say HI');
// li.insertIntoEffecient(0,'insert hii');
// li.removeElements(2);
//li.reverse();