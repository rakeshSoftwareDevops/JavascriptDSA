class Node {
    constructor(value) {
        this.left = null;
        this.data = value;
        this.right = null;
    }
}

class binarysearchtree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var new_node = new Node(data);
        if(!this.root) {
            this.root = new_node;
        } else {
            var current_node = this.root;
            while(current_node.left !== null || current_node.right !== null) {
                if(data > current_node.data) {
                    current_node = current_node.right;
                }
                if(data < current_node.data) {
                    current_node = current_node.left;
                }
            }
            if(new_node.data < current_node.data) {
                current_node.left = new_node;
            } if(new_node.data > current_node.data) {
                current_node.right = new_node;
            }
        }
        
    } 

    insertToTree(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value == current.value) return undefined;
                if(value < current.value){
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                    
                } else if(value > current.value){
                    if(current.right === null) {
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
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
            if(!found) return undefined;
            return current;
        }  
     }
       

    
}