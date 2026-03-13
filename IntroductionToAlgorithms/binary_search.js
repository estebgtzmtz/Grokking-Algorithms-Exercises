// Binary Search works on a sorted array.
// It repeatedly divides the search range in half to find the target value.
// If the value exists, the function returns its index.
// Time Complexity: O(log n)

const binarySearch = (array, item) => {
    // Define the current search boundaries
    let low = 0; // starting index of the search range
    let high = array.length - 1; // ending index of the search range
    // Continue searching while the range is valid
    while (low <= high) {
        // Calculate the middle index of the current search range
        const mid = Math.floor((low + high) / 2);
        // If the middle element matches the target value, return its index
        if (array[mid] === item) {
            return `found on index array[${mid}] = ${array[mid]}`
        }
        // If the middle value is greater than the target,
        // continue searching in the left half
        if (array[mid] > item) {
            high = mid - 1;
        } else {
            // Otherwise continue searching in the right half
            low = mid + 1;
        }
    }
    // If the item is not found, return undefined
    return undefined;
}

const array = [3, 7, 12, 18, 21, 25, 29, 34, 38, 41, 47, 52, 56, 63, 67, 72, 78, 84, 89, 93, 97, 105, 112, 118, 124, 131, 145, 152, 168, 190];

console.log(binarySearch(array, 72));