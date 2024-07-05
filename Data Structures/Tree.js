class Node {
    constructor(key) {
        this.key = key;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(key, parentKey = null) {
        const newNode = new Node(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            const parent = this.findNode(this.root, parentKey);
            if (parent) {
                parent.children.push(newNode);
            } else {
                throw new Error('Parent node not found');
            }
        }
    }
 
    findNode(node, key) {
        if (node === null) return null;
        if (node.key === key) return node;
        for (let child of node.children) {
            const result = this.findNode(child, key);
            if (result) return result;
        }
        return null;
    }

    bfs() {
        if (this.root === null) return [];

        const queue = [this.root];
        const result = [];

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.key);

            for (let child of node.children) {
                queue.push(child);
            }
        }

        return result;
    }

    dfs() {
        if (this.root === null) return [];

        const stack = [this.root];
        const result = [];

        while (stack.length > 0) {
            const node = stack.pop();
            result.push(node.key);

            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }

        return result;
    }
}

// Example usage:
const tree = new Tree();
tree.insert(1); // Insert root node
tree.insert(2, 1); // Insert node with key 2 under parent node with key 1
tree.insert(3, 1); // Insert node with key 3 under parent node with key 1
tree.insert(4, 2); // Insert node with key 4 under parent node with key 2
tree.insert(5, 2); // Insert node with key 5 under parent node with key 2
tree.insert(6, 3); // Insert node with key 6 under parent node with key 3

console.log("BFS:", tree.bfs()); // Output: [1, 2, 3, 4, 5, 6]
console.log("DFS:", tree.dfs()); // Output: [1, 2, 4, 5, 3, 6]
