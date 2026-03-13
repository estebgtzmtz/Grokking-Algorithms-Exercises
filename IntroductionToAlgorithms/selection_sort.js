// Selection Sort is a basic sorting algorithm that repeatedly selects the smallest
// element from the unsorted portion of the array and places it in its correct position.
// Time Complexity: O(n^2)

const selectionSort = (array) => {
    // Iterate through the entire array
    // i represents the current position where the next smallest element should be placed
    for (let i = 0; i < array.length; i++) {
        // Assume the current index is the smallest
        let minIndex = i;
        // Search for a smaller element in the remaining unsorted portion
        for (let j = i + 1; j < array.length; j++) {
            // If we find a smaller value, update the index of the minimum element
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the current element with the smallest element found
        let temp = array[i];          // store the current value at i
        array[i] = array[minIndex];   // move the smallest value to position i
        array[minIndex] = temp;       // move the previous value of i to minIndex
    }

    return array; // Return the sorted array
}

console.log(selectionSort([42, 15, 23, 8, 4, 16, 9, 55, 0, 34, 12, 67, 3, 28, 19, 1, 6, 31, 10, 7]))