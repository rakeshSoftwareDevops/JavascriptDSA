class Heap {
    constructor() {
        this.values = [];
    }

    insertmaxheap(data) {
        this.values.push(data);
        let current_pos = this.values.length - 1;
        let parent_index, temp;

        while (current_pos > 0) {
            parent_index = Math.floor((current_pos - 1) / 2);
            if (this.values[current_pos] <= this.values[parent_index]) break;

            temp = this.values[parent_index];
            this.values[parent_index] = this.values[current_pos];
            this.values[current_pos] = temp;

            current_pos = parent_index;
        }
    }

    extractmaxheap() {
        if (this.values.length === 0) return null;
        if (this.values.length === 1) return this.values.pop();

        let maxElement = this.values[0];
        this.values[0] = this.values.pop();
        
        let current_pos = 0;
        let leftpos, rightpos, temp;

        while (true) {
            leftpos = 2 * current_pos + 1;
            rightpos = 2 * current_pos + 2;

            if (leftpos >= this.values.length) break;

            let largest = current_pos;
            if (this.values[leftpos] > this.values[largest]) {
                largest = leftpos;
            }
            if (rightpos < this.values.length && this.values[rightpos] > this.values[largest]) {
                largest = rightpos;
            }
            if (largest === current_pos) break;

            temp = this.values[largest];
            this.values[largest] = this.values[current_pos];
            this.values[current_pos] = temp;

            current_pos = largest;
        }

        return maxElement;
    }
}

let h = new Heap();
h.insertmaxheap(44);
h.insertmaxheap(57);
h.insertmaxheap(40);
h.insertmaxheap(31);
h.insertmaxheap(45);
h.insertmaxheap(65);
h.insertmaxheap(58);
h.insertmaxheap(70);
console.log("Heap Tree", h);
console.log("Extracted max element:", h.extractmaxheap());
console.log("Heap Tree after extraction:", h);
