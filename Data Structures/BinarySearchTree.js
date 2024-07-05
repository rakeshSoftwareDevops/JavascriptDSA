class Node {
    constructor(value) {
        this.left = null;
        this.data = value;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            var current = this.root;
            while (true) {
                if (data === current.data) return undefined; // Handle duplicate values
                if (data < current.data) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (data > current.data) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.data) {
                current = current.left;
            } else if (value > current.data) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }
}

// Example usage:
let bst = new BinarySearchTree();
bst.insert(44);
bst.insert(57);
bst.insert(40);
bst.insert(31);
bst.insert(45);
bst.insert(65);
bst.insert(58);
bst.insert(70);
console.log("BST contains 45:", bst.contains(45)); // true
console.log("BST contains 50:", bst.contains(50)); // false
console.log("Binary Search Tree:", bst);
