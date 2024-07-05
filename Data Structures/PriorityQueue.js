class Node {
    constructor(val,priority) {
        this.val = val;
        this.priority = priority;
    }
}
class Heap {
    constructor() {
        this.values = [];
    }

    insertminheap(value,priority) {
        var newNode = new Node(value,priority)
        this.values.push(newNode);
        let current_pos = this.values.length - 1;
        let parent_index, temp;

        while (current_pos > 0) {
            parent_index = Math.floor((current_pos - 1) / 2);
            if (this.values[current_pos].priority >= this.values[parent_index].priority) break;

            temp = this.values[parent_index];
            this.values[parent_index] = this.values[current_pos];
            this.values[current_pos] = temp;

            current_pos = parent_index;
        }
    }

    extractminheap() {
        if (this.values.length === 0) return null;
        if (this.values.length === 1) return this.values.pop();

        let minElement = this.values[0];
        this.values[0] = this.values.pop();
        
        let current_pos = 0;
        let leftpos, rightpos, temp;

        while (true) {
            leftpos = 2 * current_pos + 1;
            rightpos = 2 * current_pos + 2;

            if (leftpos >= this.values.length) break;

            let smallest = current_pos;
            if (this.values[leftpos].priority < this.values[smallest].priority) {
                smallest = leftpos;
            }
            if (rightpos < this.values.length && this.values[rightpos].priority < this.values[smallest].priority) {
                smallest = rightpos;
            }
            if (smallest === current_pos) break;

            temp = this.values[smallest];
            this.values[smallest] = this.values[current_pos];
            this.values[current_pos] = temp;

            current_pos = smallest;
        }

        return minElement;
    }
}

let h = new Heap();
h.insertminheap("Task 1",44);
h.insertminheap("Task 2",57);
h.insertminheap("Task 3",40);
h.insertminheap("Task 4",31);
h.insertminheap("Task 5",45);
h.insertminheap("Task 6",65);
h.insertminheap("Task 7",58);
h.insertminheap("Task 8",70);
console.log("Heap Tree", h);
console.log("Extracted max element:", h.extractminheap());
console.log("Heap Tree after extraction:", h);
