// Selection Sort is a basic sorting algorithm that repeatedly selects the smallest
// or higher element and moves it to its correct position.
// Big O(n²)

const selectionSort = (array) => {
    // Loop through the entire array
    // i represents the position where the next smallest element should go
    for (let i = 0; i <= array.length - 1; i++) {
        // j starts at the next element after i
        // this loop searches the rest of the array for a smaller value
        for (let j = i + 1; j <= array.length - 1; j++) {
            // If we find a value smaller than the one at position i
            if (array[j] < array[i]) {
                // Swap the elements
                let temp = array[i]; // store the current value at i
                array[i] = array[j]; // place the smaller value at position i
                array[j] = temp; // move the old value of i to position j
            }
        }
    }

    return array; // Return the sorted array
}

console.log(selectionSort([42, 15, 23, 8, 4, 16, 9, 55, 0, 34, 12, 67, 3, 28, 19, 1, 6, 31, 10, 7]))