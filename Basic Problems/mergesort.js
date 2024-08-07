function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate remaining elements because either left or right may have elements left
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const array = [8, 3, 9, 5, 1, 7, 2, 4, 6];
console.log("Original Array:", array);

const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);
