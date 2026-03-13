// The binarySearch function takes a sorted array and an item.
// If the item exists in the array, the function returns its position.
// The algorithm keeps track of the current search range.
// Each iteration checks the middle element:
//   - If the guess is too low, update low
//   - If the guess is too high, update high
//  Big O(log n)

const binarySearch = (array, item) => {
    let low = 0; // lower index of the search range
    let high = array.length - 1; // upper index of the search range

    while (low <= high) {
        const mid = Math.floor((low + high) / 2); // calculate middle index

        if (array[mid] === item) {
            // if the middle value matches the item, return the index
            return `found on index array[${mid}] = ${array[mid]}`
        }

        if (array[mid] > item) {
            // if the middle value is greater than the item, search the left half
            high = mid - 1
        } else {
            // otherwise search the right half
            low = mid + 1
        }
    }

    return undefined
}


const array = [3, 7, 12, 18, 21, 25, 29, 34, 38, 41, 47, 52, 56, 63, 67, 72, 78, 84, 89, 93, 97, 105, 112, 118, 124, 131, 145, 152, 168, 190];

console.log(binarySearch(array, 72));